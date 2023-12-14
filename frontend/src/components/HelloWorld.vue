<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-4 text-uppercase">Lomba Registration</h2> <!-- Increased margin-bottom -->
              

              <div class="form-outline form-white mb-4">
                <input v-model="formData.nama" type="text" id="nama" class="form-control form-control-lg" />
                <p>
                  <label class="form-label" for="nama">Nama</label>
                </p>
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="formData.email" type="email" id="email" class="form-control form-control-lg" />
                <p>
                  <label class="form-label" for="email">Email</label>
                </p>
              </div>

              <div class="form-outline form-white mb-4">
                <input v-model="formData.asalSekolah" type="text" id="asalSekolah" class="form-control form-control-lg" />
                <p>
                  <label class="form-label" for="asalSekolah">Asal Sekolah</label>
                </p>
                <br>
              </div>

              <button @click="submitForm" class="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      formData: {
        nama: '',
        email: '',
        asalSekolah: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Here, you can send the form data to your backend or perform other actions
      console.log('Form Data:', this.formData);
    },
  },
};
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
