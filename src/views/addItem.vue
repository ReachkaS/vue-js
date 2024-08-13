<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section class="section">
            <div class="row mb-3">
                <div class="col-lg-12">
                    <div class="card col-lg-12">
                        <div
                            class="card-body card-txt d-flex justify-content-between align-items-center col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                            <div class="txt">
                                <h4>Cambodia Kun Khmer</h4>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/LISTEVENT">List event
                                            </router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/REQUESTITEM">Request
                                            </router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/ADDITEM"><span
                                                    style="color:rgba(17, 134, 203, 1)">Add Item</span></router-link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <div class="btn-createEvent shadow-none ">
                                <div
                                    class="btn btn-createEvent d-block d-sm-block d-lg-flex justify-content-between align-items-center ">
                                    <ul class="sidebar-nav d-flex justify-content-center align-items-center mt-10px"
                                        id="sidebar-nav">
                                        <li class="nav-item search-bar"></li>
                                        <div class="searchbar d-flex justify-content-around align-items-center"
                                            style="border: 1px solid rgba(237, 237, 237, 1); border-radius: 5px;">
                                            <i class="bi bi-search m-1"></i>
                                            <input type="search" placeholder="Search"
                                                class="bg-white border-0 d-none d-sm-block d-lg-block"
                                                style="outline: none;">
                                        </div>
                                    </ul>
                                    <button type="button" class="bg-white m-3 border-0"> <i class="bi bi-filter"></i>
                                        Catorgory </button>
                                    <router-link to="/REQUESTITEM" type="button"
                                        class="btn btn-submit btn-sm m-1">Submit</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-flex">
                <div class="row col-12 col-md-12 col-lg-12 m-0">
                    <div class="card">
                        <div class="card-body col-lg-12">
                            <table class="table table-addItem col-12 col-md-12 col-lg-12 col-lg-12">
                                <!--datatable-->
                                <thead>
                                    <tr>
                                        <th>Name Event <i class="bi bi-arrow-down"></i> </th>
                                        <th class="d-none d-md-block d-lg-block">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="col-12 col-lg-5">
                                            <div class="itemBox d-block d-lg-flex">
                                                <div class="boximg col-4 col-md-3 col-lg-3">
                                                    <img src="../assets/images/Rectangle 34624175.png" alt=""
                                                        width="150px" height="150px">
                                                </div>
                                                <div
                                                    class="boxcontent col-4 col-md-1 col-lg-5 d-block d-md-block d-lg-block">
                                                    <div class="name">
                                                        <p>Sofa</p>
                                                    </div>
                                                    <div class="qty">
                                                        <div class="boxbtn d-flex">
                                                            <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                            <div class="num">10</div>
                                                            <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="boxBtn boxContent d-lg-none d-md-none d-flex mt-3">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>

                                        </td>
                                        <td class="col-4 col-md-5 col-lg-2">
                                            <div class="boxBtn">
                                                <div class="boxContent d-none d-md-block d-lg-flex">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-12 col-lg-5">
                                            <div class="itemBox d-block d-lg-flex">
                                                <div class="boximg col-4 col-md-3 col-lg-3">
                                                    <img src="../assets/images/Rectangle 34624175.png" alt=""
                                                        width="150px" height="150px">
                                                </div>
                                                <div
                                                    class="boxcontent col-4 col-md-3 col-lg-5 d-block d-md-block d-lg-block">
                                                    <div class="name">
                                                        <p>Sofa</p>
                                                    </div>
                                                    <div class="qty">
                                                        <div class="boxbtn d-flex">
                                                            <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                            <div class="num">10</div>
                                                            <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="boxBtn boxContent  d-lg-none d-flex mt-3">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>

                                        </td>
                                        <td class="col-4 col-md-5 col-lg-2">
                                            <div class="boxBtn">
                                                <div class="boxContent d-none d-md-block d-lg-flex">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-12 col-lg-5">
                                            <div class="itemBox d-block d-lg-flex">
                                                <div class="boximg col-4 col-md-3 col-lg-3">
                                                    <img src="../assets/images/Rectangle 34624175.png" alt=""
                                                        width="150px" height="150px">
                                                </div>
                                                <div
                                                    class="boxcontent col-4 col-md-3 col-lg-5 d-block d-md-block d-lg-block">
                                                    <div class="name">
                                                        <p>Sofa</p>
                                                    </div>
                                                    <div class="qty">
                                                        <div class="boxbtn d-flex">
                                                            <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                            <div class="num">10</div>
                                                            <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="boxBtn boxContent  d-lg-none d-flex mt-3">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>

                                        </td>
                                        <td class="col-4 col-md-5 col-lg-2">
                                            <div class="boxBtn">
                                                <div class="boxContent d-none d-md-block d-lg-flex">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="col-12 col-lg-5">
                                            <div class="itemBox d-block d-lg-flex">
                                                <div class="boximg col-4 col-md-3 col-lg-3">
                                                    <img src="../assets/images/Rectangle 34624175.png" alt=""
                                                        width="150px" height="150px">
                                                </div>
                                                <div
                                                    class="boxcontent col-4 col-md-3 col-lg-5 d-block d-md-block d-lg-block">
                                                    <div class="name">
                                                        <p>Sofa</p>
                                                    </div>
                                                    <div class="qty">
                                                        <div class="boxbtn d-flex">
                                                            <div class="boxInc"><i class="bi bi-dash-lg"></i></div>
                                                            <div class="num">10</div>
                                                            <div class="boxDec"><i class="bi bi-plus-lg"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="boxBtn boxContent  d-lg-none d-flex mt-3">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>

                                        </td>
                                        <td class="col-4 col-md-5 col-lg-2">
                                            <div class="boxBtn">
                                                <div class="boxContent d-none d-md-block d-lg-flex">
                                                    <button type="button" class="btnCencel btn-sm">Cancel</button>
                                                    <button type="button" class="btnAdd btn-sm">Add</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination d-flex justify-content-end">
                                <div class="boxcontent d-flex justify-content-between align-items-center">
                                    <a href="" type="button"><i class="bi bi-chevron-left"></i></a>
                                    <a href="" type="button"
                                        style="background: rgba(17, 134, 203, 1); color:white;">1</a>
                                    <p style="margin: 5px;">of</p>
                                    <a href="" type="button"
                                        style="border:1px solid rgba(17, 134, 203, 1); background: white; color:rgba(17, 134, 203, 1);">24</a>
                                    <a href="" type="button"><i class="bi bi-chevron-right"
                                            style="color: rgba(17, 134, 203, 1);"></i></a>
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
<script>
export default {
    name: 'addItem',
    props: {
        msg: String
    }
}
</script>
<style scoped>
.btn-submit,
.btn-submit:hover {
    background-color: rgba(17, 134, 203, 1);
    color: white;
}
</style>