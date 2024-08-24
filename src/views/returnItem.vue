<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main ">
        <section>
        <div class="row g-0 mb-3">
          <div class="card">
            <div class="card-body d-flex justify-content-around align-items-center">
              <div class="col-3 col-md-5 col-lg-9">
                <p class="card-title"> Return Item</p>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/listEvent">List
                                Event</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/listEvent/listRequest">List
                            Event</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/listEvent/listRequest/returnItem"> 
                            <span style="color:rgba(17, 134, 203, 1)">Return</span></router-link>
                        </li>
                    </ol>
                </nav>
              </div>
              <div class="col-5 col-md-5 col-lg-3 d-lg-flex d-md-flex d-block  btn-createEvent shadow-none">
                <button type="button" class="btn btn-dark btn-sm  m-1"
                                    style="background: rgba(10, 80, 122, 1);">Save as draft</button>
                <router-link to="/listEvent/listRequest/"><button type="button" class="btn btn-primary btn-sm m-1"
                                        style="background:rgba(17, 134, 203, 1)">Return</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section class="section">
            <div class="">
                <section class="section row">
                    <div class=" col-12 col-md-12 col-lg-6 p-3">
                        <div class="card-body card h-100 p-3">
                            <form class="row g-3" method="POST">
                                <div class="col-12">
                                    <label for="date" class="form-label p-1">Date</label>
                                    <input type="date" class="form-control shadow-none" name="startDate" id="startDate"
                                        placeholder="25-jun-2024">
                                </div>
                                <div class="col-12">
                                    <label for="reference" class="form-label p-1">Reference</label>
                                    <input type="text" name="reference" class="form-control shadow-none" id=""
                                        placeholder="Reference">
                                </div>
                                <div class="col-12">
                                    <label for="warehouse" class="form-label p-1">Warehouse</label>
                                    <select class=" form-select shadow-none" name="warehouse" id="warehouse">
                                        <option value="Warehouse1">Warehouse1</option>
                                    </select>
                                </div>
                            </form>
                            <div class="card card-request shadow-none border-0">
                                <table class="table table-Request col-12 col-md-12 col-lg-12">
                                    <thead>
                                        <tr>
                                            <th scope="col">&numero;</th>
                                            <th scope="col">Item Name</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items" :key="item.id">
                                            <td scope="row">
                                                <div class="boxId">{{ item.id }}</div>
                                            </td>
                                            <td>
                                                <div class="boxitemName">
                                                    <img :src="item.image"
                                                        alt="" height="25px">
                                                    <p class="m-1">{{ item.name }}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="boxQty ">
                                                    <div class="boxbtn">
                                                        <button type="button" class="boxDec bg-white" @click="decrement(item.id)"><i class="bi bi-dash-lg"></i></button>
                                                                <div class="num">{{ itemCounts[item.id || 0] }}</div>
                                                                <button type="button" class="boxInc bg-white" @click="increment(item.id)"><i class="bi bi-plus-lg"></i></button>
                                                    </div>
                                                    <div class="boxRemove">
                                                        <button type="button" class="border-0 bg-white " @click="removeItem(item.id)"><i class="bi bi-trash3"></i></button> 
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-md-12  col-lg-6 p-3">
                        <div class="card-body card h-100 p-3">
                            <!-- Vertical Form -->
                            <form class="row g-3" method="POST">
                                <label for="description" class="form-label p-1 ">Event description</label>
                                <div class="content-txt d-flex justify-content-center align-items-center">
                                    <div class="textfield shadow-none col-10 " style="position: relative;">
                                        <div class="icon mb-2" style="position: absolute; top: 0; padding: 10px;">
                                            <i class="bi bi-type-bold"></i>
                                            <i class="bi bi-type-underline"></i>
                                            <i class="bi bi-justify-left"></i>
                                            <i class="bi bi-justify"></i>
                                            <i class="bi bi-justify-right"></i>
                                            <i class="bi bi-link"></i>
                                        </div>
                                        <textarea class="form-control shadow-none pt-5" aria-label="With textarea"
                                            name="description" id="description" rows="5"
                                            placeholder="Your text goes here.."></textarea>
                                    </div>
                                </div>

                                <p class="mt-3" style="color: rgba(102, 112, 133, 0.75);">Add a long description for
                                    your Event </p>
                            </form>
                            <!-- Vertical Form -->

                            <label for="additonalImg form-label" class="mt-3 mb-0">Attachment file</label>

                            <div class="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
                                <div class=" form-control d-flex justify-content-around align-items-center">
                                    <div
                                        class="m-3 d-flex justify-content-center align-items-center p-1 dashed-border w-50">
                                        <div class="contentBox ">
                                            <label class="custum-file-upload" for="file">
                                                <div class="icon iconUpload d-flex justify-content-center">
                                                    <i class="bi bi-cloud-arrow-up-fill fs-1 w-100 d-flex justify-content-end m-3" v-if="!image"></i>
                                                    <img :src="image" alt="" width="100px">
                                                </div> 
                                                <span class="d-flex justify-content-center text-align-center">Drag & Drop File here</span>
                                                <div class="iconUpload d-flex justify-content-center m-1">
                                                    <a  class="btn btn-dark btn-sm mb-1 d-flex justify-content-center m-1" id="uploadButton">Upload File</a>
                                                    <button type="button" class="border-0 p-0 bg-white m-1" @click="deleteMainImage" ><i class="bi bi-trash3"></i></button>
                                                </div>
                                                <input type="file" id="file"  @change="handleFileChange" style="display: none;">
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
    <!-- End mainPanel-->
</template>
<script setup>
import {  ref } from 'vue';

const image = ref('');  

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

const deleteMainImage = () => {
  image.value = '';
};
</script>