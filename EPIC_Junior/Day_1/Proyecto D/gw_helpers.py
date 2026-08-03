# Conventions
# positive shift = delay the inverted Livingston series
# positive shift = Livingston received the signal first
import numpy as np
from scipy import signal

def correlation_for_shift(
    h1_values: np.ndarray,
    inverted_l1_values: np.ndarray,
    shift_samples: int,
) -> float:
    if abs(shift_samples) >= len(h1_values):
        raise ValueError(
            "The requested shift is too large."
        )

    if shift_samples > 0:
        h1_overlap = h1_values[shift_samples:]
        l1_overlap = inverted_l1_values[:-shift_samples]
    elif shift_samples < 0:
        h1_overlap = h1_values[:shift_samples]
        l1_overlap = inverted_l1_values[-shift_samples:]
    else:
        h1_overlap = h1_values
        l1_overlap = inverted_l1_values

    h1_centred = h1_overlap - np.mean(h1_overlap)
    l1_centred = l1_overlap - np.mean(l1_overlap)

    denominator = np.sqrt(
        np.sum(h1_centred**2)
        * np.sum(l1_centred**2)
    )

    if denominator == 0:
        return np.nan

    return float(
        np.sum(h1_centred * l1_centred)
        / denominator
    )

def shift_for_plot(
    values: np.ndarray,
    shift_samples: int,
) -> np.ndarray:
    shifted = np.full(
        values.shape,
        np.nan,
        dtype=float,
    )

    if shift_samples > 0:
        shifted[shift_samples:] = values[:-shift_samples]
    elif shift_samples < 0:
        shifted[:shift_samples] = values[-shift_samples:]
    else:
        shifted[:] = values

    return shifted

def make_spectrogram(
    values: np.ndarray,
    sample_rate_hz: float,
) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    frequency_hz, time_s, magnitude = signal.spectrogram(
        values,
        fs=sample_rate_hz,
        window="hann",
        nperseg=256,
        noverlap=224,
        nfft=1024,
        detrend=False,
        scaling="spectrum",
        mode="magnitude",
    )

    return frequency_hz, time_s, magnitude