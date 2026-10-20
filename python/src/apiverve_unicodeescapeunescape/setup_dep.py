from setuptools import setup, find_packages

setup(
    name='apiverve_unicodeescapeunescape',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unicode Escape/Unescape converts text into Unicode escape sequences or restores escaped strings back into readable characters. Send any string to get the transformed text and total character count.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/unicodeescape?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
