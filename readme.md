# Penggunaan DigiflazzAPI

DigiflazzAPI adalah sebuah library Node.js yang memungkinkan Anda untuk mengakses API Digiflazz dengan mudah. Berikut adalah cara menggunakan library ini:

## Instalasi

Pastikan Anda telah menginstal Node.js dan npm di komputer Anda sebelum menginstal library ini.

1. Instal library DigiflazzAPI melalui npm:

   ```bash
   npm install digiflazz-api
   ```
2. Import library dan inisialisasi objek DigiflazzAPI
   ```bash
   const digiflazz = require('digiflazz-api');
   const api = new digiflazz.DigiflazzAPI('username', 'apikey');
   ```
## Mengambil Saldo (Check Balance)
Anda dapat menggunakan fungsi checkBalance untuk memeriksa saldo Anda di Digiflazz.
```bash
api.checkBalance()
  .then((balance) => {
    console.log('Saldo:', balance);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```
## Mendapatkan Daftar Harga (Get Price List)
Untuk mendapatkan daftar harga produk, gunakan fungsi getPriceList.
```bash
api.getPriceList()
  .then((priceList) => {
    console.log('Daftar Harga:', priceList);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```
## Melakukan Deposit
Anda dapat melakukan deposit dengan menggunakan fungsi deposit. Anda perlu menyertakan jumlah deposit, nama bank, dan nama pemilik rekening.
```bash
const amount = 10000000; // Jumlah deposit dalam Rupiah
const bank = 'BCA'; // Nama bank
const ownerName = 'John Doe'; // Nama pemilik rekening

api.deposit(amount, bank, ownerName)
  .then((result) => {
    console.log('Hasil Deposit:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```
# soon