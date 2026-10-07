# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ProductViewSet, CartItemViewSet
# from .views import (
#     ProductViewSet,
#     CartItemViewSet,
#     SignupView,
#     CurrentUserView,
# )


# router = DefaultRouter()

# router.register("products", ProductViewSet)
# router.register("cart", CartItemViewSet)

# urlpatterns = [
#     path("", include(router.urls)),
#      path("signup/", SignupView.as_view()),
#     path("current-user/", CurrentUserView.as_view()),
#       path("", include(router.urls)),
# ]
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter

# from .views import (
#     ProductViewSet,
#     CartItemViewSet,
#     SignupView,
#     CurrentUserView,
#     PlaceOrderView,
#       MyOrdersView,
# )

# router = DefaultRouter()

# router.register(
#     "products",
#     ProductViewSet
# )

# router.register(
#     "cart",
#     CartItemViewSet
# )

# urlpatterns = [
#     path(
#         "signup/",
#         SignupView.as_view()
#     ),

#     path(
#         "user/",
#         CurrentUserView.as_view()
#     ),

#     path(
#         "",
#         include(router.urls)
#     ),
#     path(
#     "place-order/",
#     PlaceOrderView.as_view()
# ),
# path("my-orders/", MyOrdersView.as_view()),
# ]
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet,
    CartItemViewSet,
    SignupView,
    CurrentUserView,
    PlaceOrderView,
    MyOrdersView,
    AdminCustomerOrdersView,
)

router = DefaultRouter()

router.register(
    "products",
    ProductViewSet
)

router.register(
    "cart",
    CartItemViewSet
)

urlpatterns = [
    path(
        "signup/",
        SignupView.as_view()
    ),

    path(
        "user/",
        CurrentUserView.as_view()
    ),

    path(
        "",
        include(router.urls)
    ),

    path(
        "place-order/",
        PlaceOrderView.as_view()
    ),

    path(
        "my-orders/",
        MyOrdersView.as_view()
    ),

    path(
        "admin/customer-orders/",
        AdminCustomerOrdersView.as_view()
    ),
]