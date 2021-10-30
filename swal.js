document.querySelector('#tekan').addEventListener('click', function () {
  Swal.fire("halo", "", "info").then(function () {
    Swal.fire({
      title: 'Siapa nama kamu?',
      input: 'text',
      inputLabel: '',
      showCancelButton: 'true',
      inputValidator: (value) => {
        if (!value) {
          return "isi dulu namanya";
        } else {
          nama = value;
        }
      }
    }).then(function () {
      Swal.fire(`hai ${nama}`, '', 'success').then(function () {
        Swal.fire({
          title: `Bagaimana kabar ${nama}`,
          showDenyButton: true,
          confirmButtonText: 'baik',
          denyButtonText: 'ga baik',
          icon: `question`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(`oh syukurlah kalau begitu`).then(function () {
              Swal.fire({
                title: `berapa persen kesenangan ${nama} hari ini`,
                icon: 'info',
                input: 'range',
                inputAtributes: {
                  min: 10,
                  max: 100,
                  step: 10,
                },
                inputValue: 80
              }).then((range) => {
                rg = range.value
                if (rg >= 70) {
                  Swal.fire(`wow seneng banget ${nama} kelihatannya`, 'hari ini', 'success').then(function () {
                    Swal.fire(`yaudah aku doa in ${nama} senang`, 'dan sehat selalu', 'success').then(function () {
                      Swal.fire(`dadah ${nama} `, 'sampai jumpa lagi', 'info')
                    })
                  })
                } else {
                  Swal.fire(`oh biasa aja ya ${nama}`, 'hari ini', 'info').then(function () {
                    Swal.fire(`yaudah aku doa in ${nama} senang`, 'dan sehat selalu', 'success').then(function () {
                      Swal.fire(`dadah ${nama} `, 'sampai jumpa lagi', 'info')
                    })
                  })
                }
              })
            })
          } else {
            Swal.fire({
              title: `kenapa ga baik ${nama}`,
              input: 'text',
              showCancelButton: 'false',
            }).then(function () {
              Swal.fire(`Yaudah ${nama} aku hanya bisa membantu berdoa`, 'semoga masalah mu cepat selesai', 'success').then(function () {
                Swal.fire(`dadah ${nama} `, 'sampai jumpa lagi', 'info')
              })
            })
          }
        })
      })
    })
  })
});