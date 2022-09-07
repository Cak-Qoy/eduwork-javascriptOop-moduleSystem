class Biodata {
    nama = ''
    umur = ''
    gender = ''

    constructor (nama, umur, gender) {
        this.nama = nama;
        this.umur = umur;
        this.gender = gender;
    }
}


let biodata1 = new Biodata('Abdul', '25', 'Laki-laki');
let biodata2 = new Biodata('Qoyyum', '25', 'Laki-laki');
let biodata3 = new Biodata('Sholica', '24', 'Perempuan');
let nama1 = document.getElementById('nama1');
let umur1 = document.getElementById('umur1');
let gender1 = document.getElementById('gender1');
let nama2 = document.getElementById('nama2');
let umur2 = document.getElementById('umur2');
let gender2 = document.getElementById('gender2');
let nama3 = document.getElementById('nama3');
let umur3 = document.getElementById('umur3');
let gender3 = document.getElementById('gender3');

export { biodata1, biodata2, biodata3, nama1, umur1, gender1, nama2, umur2, gender2, nama3, umur3, gender3 };
