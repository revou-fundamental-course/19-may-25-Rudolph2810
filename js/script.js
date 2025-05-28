document.addEventListener('DOMContentLoaded', function () {
    const inputSuhu = document.getElementById('input-suhu');
    const hasilSuhu = document.getElementById('hasil-suhu');
    const detailSuhu = document.getElementById('detail-suhu');
    const konversiButton = document.querySelector('.bg-lightseagreen');
    const resetButton = document.querySelector('.bg-lightcoral');
    const reverseButton = document.querySelector('.bg-lightblue');

        // Fungsi untuk mengonversi Celsius ke Fahrenheit
    function konversiCelsiusKeFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

        // Fungsi untuk mengonversi Fahrenheit ke Celsius
    function konversiFahrenheitKeCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

        // Event listener untuk tombol konversi
    konversiButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah form submit
        const celsius = parseFloat(inputSuhu.value);
        if (!isNaN(celsius)) {
            const fahrenheit = konversiCelsiusKeFahrenheit(celsius);
            hasilSuhu.value = fahrenheit.toFixed(2) + ' °F';
            detailSuhu.value = `${celsius.toFixed(2)} °C dikonversi menjadi ${fahrenheit.toFixed(2)} °F.`;
            } else {
                hasilSuhu.value = '';
                detailSuhu.value = 'Masukkan nilai suhu yang valid.';
            }
        });

        // Event listener untuk tombol reset
        resetButton.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah form submit
            inputSuhu.value = '';
            hasilSuhu.value = '';
            detailSuhu.value = '';
        });

        // Event listener untuk tombol reverse
        reverseButton.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah form submit
            const fahrenheit = parseFloat(hasilSuhu.value);
            if (!isNaN(fahrenheit)) {
                const celsius = konversiFahrenheitKeCelsius(fahrenheit);
                inputSuhu.value = celsius.toFixed(2);
                hasilSuhu.value = fahrenheit + ' °F';
                detailSuhu.value = `${fahrenheit.toFixed(2)} °F dikonversi menjadi ${celsius.toFixed(2)} °C.`;
            } else {
                hasilSuhu.value = '';
                detailSuhu.value = 'Masukkan nilai suhu yang valid.';
            }
        });
    });

