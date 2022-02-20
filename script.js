// mengambil/memanggil button check
let check = document.getElementById('check');
check.addEventListener('click', (e) => {
    // mengambil inputan nama
    let nama = document.getElementById('nama').value;
    // nama.push(isiNama);

    // mengambil inputan jenis goldar
    let goldar = document.getElementById('goldar').value;
    // goldar.push(isiGoldar);

    if(true) {
        // memanggil & menampilkan loading button
        let loadingbtn = document.getElementById('button-ck');
        loadingbtn.style.display = 'block';

        // mengganti & menyembunyikan button check
        let check =  document.getElementById('check');
        // check.innerHTML = loadingbtn;
        check.style.display = 'none';
        
        setTimeout(function hasil() { 
            // menyembunyikan section form
            let form = document.getElementsByTagName('form')[0];
            form.style.display = 'none';

            // menampilkan section hasil/output
            let hasil = document.getElementsByClassName('output-sm')[0];
            hasil.style.display = 'block';

            // menyisipkan / menampilkan nama dari inputan kedalam section hasil/output
            let hasilnama = document.getElementsByClassName('nama')[0];
            hasilnama.innerHTML = nama;

            // menyisipkan / menampilkan jenis goldar dari inputan kedalam section hasil/output
            let hasilgoldar = document.getElementsByClassName('jenis-goldar')[0];
            hasilgoldar.textContent = goldar;

            // golongan darah A
            if(goldar == 'A') {
                let A = document.getElementsByClassName('hasil')[0];
                A.innerHTML = `Orang dengan golongan darah A identik dengan sifatnya 
                yang terorganisir, kritis, bertanggung jawab, konsisten dengan apa yang 
                sudah direncanakan, tenang dalam menghadapi masalah, dan berusaha adil dalam 
                situasi apapun. Sayangnya, ada sifat yang membuat orang dengan golongan 
                darah A ini cenderung tidak disukai, yaitu sifat keras kepala dan perfeksionisnya.`;
                A.style.textAlign = 'justify';
                A.style.lineHeight = '24px';
                A.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
            }
                
            // golongan darah B
            else if(goldar == 'B') {
                let B = document.getElementsByClassName('hasil')[0];
                B.innerHTML = `Orang dengan golongan darah B memiliki semangat yang tinggi, aktif, kreatif, dan 
                selalu ingin tahu. Mereka ingin tahu banyak hal karena rasa penasarannya yang tinggi. Jika mereka 
                sudah tertarik dengan sesuatu hal, mereka melakukannya dengan sepenuh hati.

                Sayangnya, karakternya yang santai cenderung dianggap kurang kooperatif karena lebih suka mengikuti 
                aturan dan ide mereka sendiri. Beberapa orang dengan golongan darah B ini juga cenderung individualis dan 
                lebih mementingkan logika daripada perasaannya.`;
                B.style.textAlign = 'justify';
                B.style.lineHeight = '24px';
                B.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
            }

            // golongan darah AB
            else if(goldar == 'AB') {
                let AB = document.getElementsByClassName('hasil')[0];
                AB.innerHTML = `Dibandingkan golongan darah lainnya, orang dengan golongan darah AB paling sulit diprediksi 
                atau dikenal misterius. Walaupun kepribadiannya suka berubah, orang dengan golongan darah AB ini dikenal 
                memiliki banyak teman.

                Mereka memiliki karakter yang kritis, rasional, bertanggung jawab, suka menolong, dan mudah beradaptasi. 
                Sayangnya, mereka cenderung tidak tegas, mudah lupa, dan sensitif. Mereka memiliki perasaan yang lembut, 
                karena rasa empatinya yang tinggi terhadap situasi orang lain. Bahkan, mereka tidak keberatan membantu 
                orang lain selama mereka mampu.`;
                AB.style.textAlign = 'justify';
                AB.style.lineHeight = '24px';
                AB.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
            }

            // golongan darah O
            else if(goldar == 'O') {
                let O = document.getElementsByClassName('hasil')[0];
                O.innerHTML = `Orang golongan darah O identik dengan sikapnya yang mudah beradaptasi dengan lingkungan baru atau 
                easy-going. Mereka cenderung baik hati, pemurah, enerjik, terbuka, dan menghargai pendapat orang lain sehingga 
                mudah disukai oleh banyak orang. Sayangnya, orang dengan golongan darah O ini mudah terpengaruh oleh orang lain, 
                kurang fokus, keras kepala, dan lebih suka menjadi pengikut dibanding pemimpin.`;
                O.style.textAlign = 'justify';
                O.style.lineHeight = '24px';
                O.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
            }

            else {
                let hasil = document.getElementsByClassName('output-sm')[0];
                hasil.innerHTML = 'Hasil Tidak Ditemukan..';
                alert('Anda Belum Menginput!');
            }
        
        }, 900);
    }

    e.preventDefault();
});

// memanggil button kembali
let kembali = document.getElementById('kembali');
kembali.addEventListener('click', () => {
	
	// opsi confirm mengulang
	let ulangi = confirm('Anda Benar Ingin Memulai Kembali?');

	if(ulangi == true) {
		// menampilkan section form
		let form = document.getElementsByTagName('form')[0];
		form.style.display = 'block';

		// menyembunyikan section hasil/output
		let hasil = document.getElementsByClassName('output-sm')[0];
		hasil.style.display = 'none';

        // menampilkan button check
        let check = document.getElementById('check');
        check.style.display = 'block';

        // menyembunyikan button loading
        let loadingbtn = document.getElementById('button-ck');
        loadingbtn.style.display = 'none';
	}

	else {
        // mengambil inputan nama
		let nama = document.getElementById('nama').value;

        // menyembunyikan section hasil/output
		let hasil = document.getElementsByClassName('output-sm')[0];
		hasil.style.display = 'none';

		// memanggil section penampung text 'terimakasih'
		let penutup = document.getElementsByClassName('output-terimakasih')[0];
        penutup.style.display = 'block';

        let text = document.getElementsByClassName('terimakasih')[0];
		text.textContent = `- Terima Kasih ${nama} -`;
		
		text.style.fontFamily = '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
		text.style.textAlign = 'center';
		text.style.paddingTop = '20px';
		text.style.fontSize = '18px';
		
		alert(`Terima Kasih ${nama} :)`);

	}
});
