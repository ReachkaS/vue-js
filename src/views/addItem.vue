<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section class="section">
            <div class="row mb-3">
                <div class="col-lg-12">
                    <div class="card col-lg-12">
                        <div class="card-body card-txt d-flex justify-content-between align-items-center col-5 col-sm-12 col-md-12 col-lg-12 mt-3">
                            <div class="txt">
                                <h4>Cambodia Kun Khmer</h4>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/listEvent">List event</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/listEvent/requestItem">Request</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/listEvent/listRequest/addItem"><span style="color:rgba(17, 134, 203, 1)">Add Item</span></router-link></li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="btn btn-createEvent d-sm-block d-lg-flex justify-content-between align-items-center">
                                <ul class="sidebar-nav d-flex justify-content-center align-items-center col-3" id="sidebar-nav">
                                    <li class="nav-item search-bar"></li>
                                    <div class="searchbar d-flex justify-content-around align-items-center" style="border: 1px solid rgba(237, 237, 237, 1); border-radius: 5px;">
                                        <i class="bi bi-search m-1"></i>
                                        <input type="search" placeholder="Search" class="bg-white border-0 d-none d-sm-block d-lg-block col-9" style="outline: none;">
                                    </div>
                                </ul>
                                <button type="button" class="bg-white m-3 border-0"><i class="bi bi-filter"></i> Category</button>
                                <router-link to="/listEvent/requestItem" type="button" class="btn btn-submit btn-sm m-1 col-4" @click="handleAddItem">Submit</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex">
                <div class="row col-12 col-md-12 col-lg-12 m-0">
                    <div class="card">
                        <div class="card-body col-lg-12">
                            <table class="table table-addItem col-12 col-md-12 col-lg-12">
                                <thead>
                                    <tr>
                                        <th>Name Event <i class="bi bi-arrow-down"></i></th>
                                        <th class="d-none d-md-block d-lg-block">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in items" :key="item.id">
                                        <td class="col-12 col-lg-5">
                                            <div class="itemBox d-block d-lg-flex">
                                                <div class="boximg col-4 col-md-3 col-lg-3">
                                                    <img :src="item.image" alt="" width="100px" height="100px">
                                                </div>
                                                <div class="boxcontent col-4 col-md-1 col-lg-5 d-block d-md-block d-lg-block">
                                                    <div class="name">
                                                        <p>{{ item.name }}</p>
                                                    </div>
                                                    <div class="qty">
                                                        <div class="boxQty d-flex">
                                                            <div class="boxbtn">
                                                                <button type="button" class="boxDec bg-white w-100" @click="decrement(item.id)"><i class="bi bi-dash-lg"></i></button>
                                                                <div class="num w-100">{{ itemCounts[item.id] || 0 }}</div>
                                                                <button type="button" class="boxInc bg-white w-100" @click="increment(item.id)"><i class="bi bi-plus-lg"></i></button>
                                                            </div>
                                                            <button type="button" class="btn btnremove border-0" @click="removeItem(item.id)"><i class="bi bi-trash3"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="boxBtn boxContent d-lg-none d-md-none d-flex mt-3">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm" @click="addItem(item.id)">Add</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="col-4 col-md-5 col-lg-2">
                                            <div class="boxBtn">
                                                <div class="boxContent d-none d-md-block d-lg-flex">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm" @click="selectItem(item.id)">Add</button>
                                                </div>
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
                </div>
            </div>
        </section>
    </main>
    <!-- End mainPanel -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useAddStore } from '@/stores/eventStore';

const addStore = useAddStore();
const { items, itemCounts, fetchItems, increment, decrement } = addStore;

onMounted(() => {
    fetchItems();
});

</script>

<style scoped>
.btn-submit,
.btn-submit:hover {
    background-color: rgba(17, 134, 203, 1);
    color: white;
}
</style>
