from setuptools import setup, find_packages

setup(
    name='apiverve_unicodeescape/unescape',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unicode Escape/Unescape is a tool for converting characters to Unicode escape sequences and vice versa. It handles all Unicode characters including emojis and surrogate pairs.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
