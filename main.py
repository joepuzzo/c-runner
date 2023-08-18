import ctypes

# Load the shared library into ctypes
add_lib = ctypes.CDLL('./add.so')

# Call the function add from the shared library
result = add_lib.add(5, 7)

print(f"The result is: {result}")
