const { Controller, Response } =  require("pepesan");

const welcome = `
Halo, selamat datang di Pelayanan Desa Bulurejo, Benjeng, Gresik.
"ayo rek gunakan layanan Digital desa Bulurejo, urus berkas di kantor desa tanpa ribet langsung satset!!"

Silahkan pilih menu sesuai dengan kebutuhan anda:
1. Pelayanan Administrasi "siap melayani kebutuhan administrasi masyarakat desa Bulurejo"
2. Kritik & Saran 
3. Alamat Kantor Desa
`

const menu_one = `
Silahkan pilih menu sesuai dengan kebutuhan anda:
1. Ketik 1 : untuk Surat Keterangan Usaha (SKU)
2. Ketik 2 : untuk Surat Pengantar Nikah
3. Ketik 3 : untuk Surat Domisili Usaha/Penduduk (SKDU)
4. Ketik 4 : untuk Surat Kehilangan 
5. Ketik 5 : untuk Surat Pengantar SKCK
6. Ketik 6 : untuk Surat Keterangan Status
`

const sku = `
Surat Keterangan Usaha (SKU) adalah dokumen yang menyatakan bahwa seseorang
atau badan usaha memiliki sebuah usaha dengan aktivitas usaha yang jelas.
Persyaratan yang harus dilampirkan:
1. Surat Pengantar Ketua RT/RW
2. Fotokopi KTP dan KK
3. Bukti lunas PBB (Pajak Bumi dan Bangunan) jika ada
4. Foto Tempat Usaha
`

const spn = `
Surat Pengantar Nikah adalah sebuah surat yang diperlukan sebagai syarat administrasi
pernikahan di Kantor Urusan Agama (KUA).
Persyaratan yang harus dilampirkan:
1. Surat Pengantar Ketua RT/RW
2. Fotokopi KTP dan Kartu Keluarga (KK) calon mempelai dan orang tua.
3. Fotokopi Akta kelahiran/Ijazah Terakhir calon mempelai.
4. Fotokopi Akta Cerai/Akta Kematian sesuai dengan statusnya.
5. Surat Pernyataan Status Perkawinan bermaterai Rp10.000.
6. Surat Rekomendasi Nikah calon mempelai pria.
7. Pas Foto 2 x 3 berwarna calon mempelai sebanyak 4 lembar
`

const skdu = `
Surat Domisili Usaha/Penduduk (SKDU) adalah dokumen untuk menyatakan bahwa suatu badan
usaha memiliki domisili atau tempat tinggal tetap di suatu lokasi.
Persyaratan yang harus dilampirkan:
1. Fotokopi KTP pemohon.
2. Fotokopi Kartu Keluarga pemohon.
3. Nomor Pokok Wajib Pajak (NPWP) pemohon.
4. Pemohon Surat keterangan persetujuan dari tetangga kanan, kiri, depan, dan belakang.
5. Surat pengantar dari RT dan RW.
6. Bukti kepemilikan tempat usaha atau bukti perjanjian sewa jika tempat usaha bukan merupakan milik sendiri.
7. Izin Mendirikan Bangunan (IMB) dari tempat usaha yang digunakan.
8. Foto tempat usaha yang diambil dari Google Maps
`

const skd = `
Surat Kehilangan dokumen yang diterbitkan untuk menyatakan bahwa suatu barang atau
dokumen telah hilang.
Persyaratan yang harus dilampirkan:
1. Fotokopi KTP pemohon.
2. Fotokopi Kartu Keluarga pemohon.
3. Surat pengantar dari RT dan RW.
4. Bukti kepemilikan barang yang hilang (misalnya, foto, bukti pembelian, atau surat perjanjian).
5. Laporan kehilangan yang dibuat oleh pemilik barang.
`

const skck = `
Surat Pengantar SKCK adalah dokumen yang diperlukan untuk mendapatkan Surat Keterangan Catatan Kepolisian (SKCK).
Persyaratan yang harus dilampirkan:
1. Surat Pengantar dari RT/RW.
2. Fotokopi KTP.
3. Fotokopi Kartu Keluarga (KK).
5. Fotokopi Akta Kelahiran/Surat Kenal Lahir/Ijazah Terakhir.
6. Pas Foto Ukuran 4x6 sebanyak 4 lembar dengan latar belakang merah.
`

const sks = `
Surat Keterangan Status adalah dokumen untuk menyatakan status seseorang, seperti status
perkawinan, status keluarga, atau status lainnya.
Persyaratan yang harus dilampirkan:
1. Surat Pengantar RT/RW.
2. Fotokopi KTP.
3. Fotokopi Kartu Keluarga (KK).
4. Bukti Status (misalnya, buku nikah atau akta cerai).
`

class BotController extends Controller {
    hi(request) {
        return Response.button.fromArrayOfObject([
            { text: "1", value: "1"},
            { text: "2", value: "2"},
            { text: "3", value: "3"},
        ], welcome, "Desa Balaraja")
    }

    menuButtonOne() {
        return Response.button.fromArrayOfObject([
            { text: "1", value: "1"},
            { text: '2', value: '2'},
            { text: '3', value: '3'},
            { text: '4', value: '4'},
            { text: '5', value: '5'},
            { text: '6', value: '6'},
        ], menu_one, 'Desa Balaraja' )
    }

    gotButtonMenuOne(request, button) {
        if (button === "1") {
            return Response.text.fromString(sku)
        } else if (button === "2") {
            return Response.text.fromString(spn)
        } else if ( button === "3") {
            return Response.text.fromString(skdu)
        } else if ( button === "4") {
            return Response.text.fromString(skd)
        } else if ( button === "5") {
            return Response.text.fromString(skck)
        } else {
            return Response.text.fromString(sks)
        }
    }
    selectedButton(request, button) {
        if (button === "1") {
            this.menuButtonOne()
        } else if ( button === "2") {
            return Response.text.fromString('Kunjungi website ini di http://localhost:3000')
        } else {
            return Response.text.fromString('Desa Balaraja')
        }
    }
}

module.exports = BotController