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
      },
      {
        path: "forgot-password",
        component: () => import('@/pages/auth/forgot-password.vue')
      },
      {
        path: "email/code",
        component: () => import('@/pages/auth/email-code.vue')
      },
      {
        path: "reset-password",
        component: () => import('@/pages/auth/reset-password')
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/home.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/home.vue"),
        name: "home"
      },
      {
        path: "/profile",
        component: () => import("@/layouts/profile.vue"),
        children: [
          {
            path: "",
            component: () => import("@/pages/profile/profile.vue"),
            name: 'profile',
            children: [
              {
                path: "",
                component: () => import("@/components/layouts/profile/Profile.vue"),
                name: 'profile-main'
              },
              {
                path: "family-tree",
                component: () => import("@/components/layouts/profile/FamilyTree.vue"),
                name: 'profile-family-tree'
              },
              {
                path: "gallery",
                component: () => import("@/components/layouts/profile/Gallery.vue"),
                name: 'profile-gallery'
              },
              {
                path: "pricing",
                component: () => import("@/components/layouts/profile/Pricing.vue"),
                name: 'profile-pricing'
              },
              {
                path: "book-memories",
                component: () => import('@/components/layouts/profile/BookMemories.vue'),
                name: "profile-book-memories"
              }
            ]
          },
          {
            path: "add-memory",
            component: () => import('@/pages/profile/addMemory.vue'),
            name: 'add-memory'
          },
          {
            path: "view-memory",
            component: () => import('@/pages/profile/viewMemory.vue'),
            name: 'view-memory'
          },
        ],

      }
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;