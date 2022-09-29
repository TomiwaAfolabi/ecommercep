<template>
  <navigationBar />
  <br />
  <category :Categories="Categories" />
  <explore :Stores="Stores"></explore>
</template>
<script>
import Category from "../category/category,component.vue";
import NavigationBar from "../navigation/navigation-component.vue";
import Explore from "../explore/explore.component.vue";
export default {
  name: "Home",
  components: {
    NavigationBar,
    Explore,
    Category,
  },
  data() {
    return {
      Categories: [
        {
          id: 1,
          CategoryName: "Clothes",
          imgUrl:
            "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
          id: 2,
          CategoryName: "Shoes",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDYA8634GU4eUNSjthjeEByvEdDFQTapYJQ&usqp=CAU",
        },
        {
          id: 3,
          CategoryName: "Accessories",
          imgUrl:
            "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&w=1000&q=80",
        },
      ],
      Stores: [
        {
          id: 1,
          StoreName: "Addidas",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR-2Y5l1S5uKcxIzW_oDvbzl2jEo2qCL3Fw&usqp=CAU",
          Category: "Shoes",
        },
        {
          id: 2,
          StoreName: "Tifs Accessories & Co",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYkYycktWpa93TN4FmMx-rzmR6zS4le3ySw&usqp=CAU",
          Category: "Accesories",
        },
        {
          id: 3,
          StoreName: "Old Navy",
          imgUrl:
            "https://media-exp1.licdn.com/dms/image/C4D0BAQGGO85hKirL5g/company-logo_200_200/0/1562363258215?e=2147483647&v=beta&t=sVwmcDi6HWECmeO7rSlvg_JxnT0NouluPQxTmwaXdOM",
          Category: "Clothes",
        },
        {
          id: 4,
          StoreName: "H & M",
          imgUrl:
            "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F83f97c14-a536-11e7-8d56-98a09be71849?fit=scale-down&source=next&width=700",
          Category: "Clothes",
        },
        {
          id: 5,
          StoreName: "Bata",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtwjI99BizxGj6USnlwvbuBwtqVXpBu7t-6CXW2_qsNopMSsQAzVRQeZJI1tLwkK-CNk&usqp=CAU",
          Category: "Shoes",
        },
        {
          id: 6,
          StoreName: "Aldo",
          imgUrl: "https://www.aldoshoes.com/assets/images/meta/og-image.jpg",
          Category: "Shoes",
        },
      ],
    };
  },
};
</script>
