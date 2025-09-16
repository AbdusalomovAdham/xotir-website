import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/auth',
    component: () => import('@/layouts/auth/index.vue'),
    name: 'auth',
    children: [
      {
        path: "sign-in",
        component: () => import('@/pages/auth/sign-in.vue'),
        name: 'sign-in'
      },
      {
        path: 'sign-up',
        component: () => import('@/pages/auth/sign-up.vue'),
        name: 'sign-up'
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/home.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/pages/home.vue"),
        name: "home"
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("@/layouts/profile.vue"),
    name: 'profile',
    children: [
      {
        path: "",
        component: () => import("@/pages/profile/profile.vue"),
        children: [
          {
            path: "",
            component: () => import("@/components/layouts/profile/Profile.vue"),
          },
          {
            path: "family-tree",
            component: () => import("@/components/layouts/profile/FamilyTree.vue"),
          },
          {
            path: "gallery",
            component: () => import("@/components/layouts/profile/Gallery.vue"),
          },
          {
            path: "pricing",
            component: () => import("@/components/layouts/profile/Pricing.vue"),
          },
        ]
      },
      {
        path: "add-memory",
        component: () => import('@/pages/profile/addMemory.vue'),
        name: 'add-memory'
      }
    ],

  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;