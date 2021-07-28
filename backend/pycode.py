model = None


import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, activations

model = keras.Sequential([
  layers.InputLayer((12, 12, 12)),
  layers.Dense(
                  42,
                  activation=activations.relu,
                  name="layer_name"),
])

model.summary()
