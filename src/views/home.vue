<template>
  <!-- ======= mainPanel ======= -->
  <main id="main" class="main">
    <section>
      <div class="row g-0 mb-3">
        <div class="card">
          <div class="card-body d-flex justify-content-around align-items-center">
            <div class="col-3 col-md-5 col-lg-9">
              <p class="card-title"> Create Event</p>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <router-link to="/">Dashboard</router-link>
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-5 col-md-5 col-lg-3 d-lg-flex d-md-flex d-block btn-createEvent shadow-none">
                <a href="#" type="button" class="btn btnSaveDraft btn-sm m-1" @click="saveAsDraft">Save as Draft</a>
                <router-link to="/listEvent" class="btn btnSavePublish btn-sm m-1" @click="handleAddEvent">
                  Save & Publish
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section row">
      <div class="col col-md-7 p-3">
        <div class="card-body card h-100">
          <!-- Vertical Form -->
          <form class="row g-1 mt-3" method="POST">
            <div class="col-12">
              <label for="Eventname" class="form-label p-1">Event Name</label>
              <input type="text" name="Eventname" class="form-control shadow-none" id="Eventname"
                 placeholder="Cambodia Kun Khmer" v-model="eventName" required>
            </div>
            <div class="col-12">
              <label for="eventCategory" class="form-label p-1" >Event Category</label>
              <select class="form-select shadow-none" name="eventCategory" id="eventCategory" v-model="eventCategory"
                required >
                <option value='0'>Select Event Category</option>
                <option value='1'>Charity</option>
              </select>
            </div>
            <div class="col-12 d-flex justify-content-around">
              <div class="col-6 col-md-6 col-lg-6 p-1">
                <label for="startDate" class="form-label">Start Date</label>
                <input type="date" class="form-control shadow-none" name="startDate" id="startDate" v-model="startDate"
                  required>
              </div>
              <div class="col-6 col-md-6 col-lg-6 p-1">
                <label for="endDate" class="form-label">End Date</label>
                <input type="date" class="form-control shadow-none" name="endDate" id="endDate" v-model="endDate"
                   required>
              </div>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label p-1">Address</label>
              <input type="text" name="address" id="inputAddress" class="form-control shadow-none" v-model="eventAddress"
                placeholder="address" autocomplete="street-address" required>
            </div>
            <div class="col-12">
              <label for="description" class="form-label p-1">Event description</label>
              <div class="textfield shadow-none" style="position: relative;">
                <div class="icon mb-2" style="position: absolute; top: 0; padding: 10px;">
                  <i class="bi bi-type-bold"></i>
                  <i class="bi bi-type-underline"></i>
                  <i class="bi bi-justify-left"></i>
                  <i class="bi bi-justify"></i>
                  <i class="bi bi-justify-right"></i>
                  <i class="bi bi-link"></i>
                </div>
                <textarea class="form-control shadow-none pt-5" aria-label="With textarea"
                  name="description" id="description" rows="5" v-model="description"
                  placeholder="Your text goes here.."></textarea>
              </div>
              <p class="mt-3" style="color: rgba(102, 112, 133, 0.75);">Add a long description for your Event</p>
            </div>
          </form>
          <!-- Vertical Form -->
        </div>
      </div>
      <div class="col col-md-5 p-3">
        <div class="card-body card h-100">
          <div class="row mx-auto col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center mt-3">
            <div class="form-control d-flex justify-content-center align-items-center">
              <div class="m-3 d-flex justify-content-center align-items-center p-1 w-50">
                <div v-if="image" class="icon" 
                  style="position: absolute; background-color: rgba(231, 243, 250, 1); top: 25px; right: 40px; width: 20px; height: 25px; display: flex; justify-content: center; align-items: center; border-radius: 3px;">
                  <button type="button" class="border-0 p-0" @click="deleteMainImage" v-show="image"><i class="bi bi-trash3"></i></button>
                </div>
                <div class="image">
                  <img v-if="image" :src="image" alt="Event Image" width="100%">
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <label class="m-3 additionalImg d-flex justify-content-start mx-auto">Additional Images</label>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 col-6">
            </div>
            <div class="col-lg-4 col-md-6 col-6">
              <div class="d-flex justify-content-around align-items-center shadow-none dashed-border h-75">
                <div class="m-3 d-flex justify-content-center align-items-center p-1 w-50">
                  <div class="image">
                    <input type="file" id="file" @change="handleFileChange" style="display:none">
                    <button @click="selectFile" class="border-0 bg-white"><img src="../assets/images/Group 1138.png" alt="" width="60px"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End mainPanel-->
</template>

<script setup>
import { ref } from 'vue';
import { useEventsStore } from '@/stores/eventStore';

const eventsStore = useEventsStore();
const eventName = ref('');
const startDate = ref('');
const endDate = ref('');
const eventAddress = ref('');
const description = ref('');
const image = ref('');  
const refnum = ref(''); 
const numofItem = ref('');
const error = ref('');

const handleAddEvent = async () => {
  if (eventName.value && startDate.value && endDate.value && eventAddress.value ) {
    try {
      await eventsStore.addEvent({
        title: eventName.value,
        startDate: startDate.value,
        endDate: endDate.value,
        address: eventAddress.value,
        description: description.value,
        image: image.value,
        refnum: refnum.value,
        numofItem: numofItem.value,
      });
      // Reset form fields
      eventName.value = '';
      startDate.value = '';
      endDate.value = '';
      eventAddress.value = '';
      description.value = '';
      image.value = '';
    } catch (err) {
      error.value = err.message;
      alert("please fill in the form")
    }
  } else {
    error.value = 'Please fill out all fields.';
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const selectFile = () => {
  document.getElementById('file').click();
};

const deleteMainImage = () => {
  image.value = '';
};


</script>
