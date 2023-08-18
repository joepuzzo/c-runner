# c-runner

Welcome to **c-runner**, a concise example demonstrating the execution of C functions from both Python and JavaScript.

## Overview

In the vast and diverse world of programming, there are instances where we might need the performance or legacy support of C while still utilizing modern languages like Python or JavaScript (Node.js). Bridging these languages often involves using a Foreign Function Interface (FFI), a mechanism by which a program written in one language can call routines or make use of services written in another. This repository serves as a straightforward illustration of that process using a simple C function and FFI.

### Features:

- 🧪 **Simple Demonstration**: An easy-to-understand `add` function written in C and how it's called from both Python and Node.js through FFI.
- 📖 **Clear Instructions**: A step-by-step guide to help you grasp the essence of cross-language calls without drowning in the complexities.

## Why `c-runner`?

- **Focused Learning**: If you've ever been curious about how C integrates with Python or JavaScript using FFI, this is a concise starting point.
- **Clarity**: By sticking to a simple function and clear examples, the primary mechanisms of interaction are illuminated without distraction.

Explore the repo and discover the elegance of bridging C with Python and JavaScript through the power of FFI!

---

## Getting started

First we need to compile the `add.cpp` file to a library file for python and node.

### Compiling C code for python

```bash
g++ -shared -o add.so add.cpp -fPIC
```

### Compiling C code for node

```bash
g++ -shared -o add.dylib add.cpp -fPIC
```

---

## Notes:

### Why Use `-fPIC`?

The `-fPIC` flag is used for generating "Position Independent Code."

**Reasons to use `-fPIC`:**

1. **Compatibility**: Ensures that the code in the shared library can run regardless of where in memory it's loaded.
2. **Efficiency**: Allows multiple programs to share a single copy of the library in memory, even if they load it at different addresses.
3. **Security**: Supports modern OS security features like ASLR (Address Space Layout Randomization) which load shared libraries at random memory addresses.
4. **General Best Practice**: While some simple code might work without `-fPIC`, using it ensures broader compatibility and future-proofs the library.

### Shared Libraries: `.dylib` vs `.so`

When interfacing with native code from high-level languages like Python and Node.js, we often compile our C++ (or other native) code into shared libraries. However, the conventions and expectations differ between environments and operating systems.

**For Node.js on macOS:**

- We typically compile to a `.dylib` (dynamic library) format. This is because libraries in macOS follow the dynamic library convention with the `.dylib` extension.
- When using FFI libraries like `ffi-napi`, the library often expects macOS dynamic libraries to have a `.dylib` extension. It's an underlying convention of the macOS system.

**For Python:**

- Python's C extension mechanism, as well as other tools like `ctypes` or `cffi`, typically expect a `.so` (shared object) file, even on macOS.
- Historically, `.so` files have been the convention for shared libraries on Unix-like systems, including Linux. Python retains this convention across platforms for simplicity and consistency.

In summary, the difference in file extensions is due to platform conventions and the expectations of the tools and environments we are working with. It's crucial to be aware of these nuances when bridging high-level languages with native code.
