<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section>
        <div class="row g-0 mb-3">
          <div class="card">
            <div class="card-body d-flex justify-content-around align-items-center">
              <div class="col-3 col-md-5 col-lg-9">
                <p class="card-title"> Event</p>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/listEvent">
                            <span style="color:rgba(17, 134, 203, 1)">List Event</span>
                        </router-link>
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col-5 col-md-5 col-lg-3 d-lg-flex d-md-flex d-block  btn-createEvent shadow-none">
                <a type="button" class="btn filter border-0 bg-white m-1  btn-sm"><i
                        class="bi bi-filter"></i> Filter</a>
                <a type="button" class="btn border-black btn-sm m-1 "><i
                        class="bi bi-cloud-download "></i> Export</a>
                <router-link to="/" class="btn btnSavePublish btn-sm m-1"><i
                        class="bi bi-plus-lg"></i>
                    AddEvent
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section>
            <div class="row d-flex mt-3">
                <section class="section">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-Request col-5 col-lg-12">
                                <thead>
                                    <tr>
                                        <th scope="col">&numero;</th>
                                        <th scope="col">Name Event</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>

                                </thead>
                                <tbody >
                                    <tr v-for="event in events" :key="event.id">
                                        <td>{{ event.id }} </td>
                                        <td>{{ event.title }}</td>
                                        <td>{{ event.startDate }}</td>
                                        <td>{{ event.endDate }}</td>
                                        <td>{{ event.address }}</td>
                                        <td>
                                            <img :src="event.image" alt="" height="25px">
                                        </td>
                                        <td class="iconView">
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical" ></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><router-link to="/listEvent/listRequest" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                                <li>
                                                        <hr class="dropdown-divider">
                                                    </li>            
                                                    <li><router-link to="/listEvent/requestItem" class="dropdown-item"><i
                                                                class="bi bi-diagram-2"></i> Request Item</router-link>
                                                    </li><li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                    <li><router-link to="#" class="dropdown-item"><i
                                                                class="bi bi-pencil-square"></i> Edit</router-link></li>
                                    
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination d-flex justify-content-end">
                                <div class="boxcontent d-flex justify-content-between align-items-center">
                                    <a href="#" type="button"><i class="bi bi-chevron-left"></i></a>
                                    <a href="#" type="button"
                                        style="background: rgba(17, 134, 203, 1); color:white;">1</a>
                                    <p style="margin: 5px;">of</p>
                                    <a href="#" type="button"
                                        style="border:1px solid rgba(17, 134, 203, 1); background: white; color:rgba(17, 134, 203, 1);">24</a>
                                    <a href="#" type="button"><i class="bi bi-chevron-right"
                                            style="color: rgba(17, 134, 203, 1);"></i></a>
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
import {  onMounted } from 'vue';
import { useEventsStore } from '@/stores/eventStore';

const eventsStore = useEventsStore();
const { events } = eventsStore;
onMounted(() => {
    eventsStore.fetchEvents();
});



</script>