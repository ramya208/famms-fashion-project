# from rest_framework import viewsets
# from .models import Product, CartItem
# from .serializers import ProductSerializer, CartItemSerializer
# from .serializers import SignupSerializer


# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


# class CartItemViewSet(viewsets.ModelViewSet):
#     queryset = CartItem.objects.all()
#     serializer_class = CartItemSerializer

# class SignupView(APIView):

#     def post(self, request):

#         serializer = SignupSerializer(
#             data=request.data
#         )

#         if serializer.is_valid():

#             serializer.save()

#             return Response(
#                 {
#                     "message": "Signup successful"
#                 },
#                 status=status.HTTP_201_CREATED
#             )

#         return Response(
#             serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST
#         )    
# from rest_framework import viewsets, status
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated, IsAdminUser
# from django.contrib.auth.models import User

# from .models import Product, CartItem
# from .serializers import (
#     ProductSerializer,
#     CartItemSerializer,
#     SignupSerializer,
# )


# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

#     def get_permissions(self):
#         if self.action in ["list", "retrieve"]:
#             return [IsAuthenticated()]

#         return [IsAuthenticated(), IsAdminUser()]

# # class CartItemViewSet(viewsets.ModelViewSet):
# #     queryset = CartItem.objects.all()
# #     serializer_class = CartItemSerializer
# class ProductViewSet(viewsets.ModelViewSet):
#     serializer_class = ProductSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user

#         # Admin → அவருடைய products மட்டும்
#         if user.is_staff:
#             return Product.objects.filter(added_by=user)

#         # Normal User → எல்லா products
#         return Product.objects.all()

#     def get_permissions(self):
#         # Products பார்க்க user + admin இருவருக்கும் permission
#         if self.action in ["list", "retrieve"]:
#             return [IsAuthenticated()]

#         # Add / Edit / Delete → Admin மட்டும்
#         return [IsAuthenticated(), IsAdminUser()]

#     def perform_create(self, serializer):
#         # Product add பண்ணிய admin automatically save
#         serializer.save(added_by=self.request.user)
# class CurrentUserView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         return Response({
#             "username": request.user.username,
#             "is_staff": request.user.is_staff,
#         })        
# # class CartItemViewSet(viewsets.ModelViewSet):
# #     queryset = CartItem.objects.all()
# #     serializer_class = CartItemSerializer
# #     permission_classes = [IsAuthenticated]

# #     def get_queryset(self):
# #         return CartItem.objects.filter(
# #             user=self.request.user
# #         )

# #     def perform_create(self, serializer):
# #         serializer.save(
# #             user=self.request.user
# #         )
# class CartItemViewSet(viewsets.ModelViewSet):
#     queryset = CartItem.objects.all()
#     serializer_class = CartItemSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return CartItem.objects.filter(
#             user=self.request.user
#         )

#     def perform_create(self, serializer):
#         serializer.save(
#             user=self.request.user
#         )


# class SignupView(APIView):

#     def post(self, request):

#         serializer = SignupSerializer(
#             data=request.data
#         )

#         if serializer.is_valid():

#             serializer.save()

#             return Response(
#                 {
#                     "message": "Signup successful"
#                 },
#                 status=status.HTTP_201_CREATED
#             )

#         return Response(
#             serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST
#         )
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Product, CartItem, Order, OrderItem
from .serializers import (
    ProductSerializer,
    CartItemSerializer,
    SignupSerializer,
    OrderSerializer,
    
)


# =========================================================
# PRODUCT VIEW
# =========================================================

class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        # Admin:
        # அவர் add செய்த products மட்டும்
        if user.is_staff:
            return Product.objects.filter(
                added_by=user
            )

        # Normal User:
        # எல்லா admin products-ம்
        return Product.objects.all()

    def get_permissions(self):

        # User + Admin:
        # Products பார்க்கலாம்
        if self.action in ["list", "retrieve"]:
            return [
                IsAuthenticated()
            ]

        # Admin மட்டும்:
        # Add / Edit / Delete
        return [
            IsAuthenticated(),
            IsAdminUser()
        ]

    def perform_create(self, serializer):

        # Product add செய்யும் admin
        # automatically owner ஆக save ஆகும்

        serializer.save(
            added_by=self.request.user
        )


# =========================================================
# CURRENT USER
# =========================================================

class CurrentUserView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        return Response({
            "username": request.user.username,
            "is_staff": request.user.is_staff,
        })


# =========================================================
# CART VIEW
# =========================================================

# class CartItemViewSet(viewsets.ModelViewSet):

#     queryset = CartItem.objects.all()
#     serializer_class = CartItemSerializer
#     permission_classes = [
#         IsAuthenticated
#     ]

#     def get_queryset(self):

#         # Logged-in user-க்கு
#         # அவருடைய cart மட்டும்

#         return CartItem.objects.filter(
#             user=self.request.user
#         )

#     def perform_create(self, serializer):

#         # Cart item automatically
#         # current user-க்கு save ஆகும்

#         serializer.save(
#             user=self.request.user
#         )
class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(
            user=self.request.user
        )

    def create(self, request, *args, **kwargs):
        product_id = request.data.get("product")

        existing_item = CartItem.objects.filter(
            user=request.user,
            product_id=product_id
        ).first()

        if existing_item:
            return Response(
                {
                    "message": "This product is already in your cart."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


# =========================================================
# SIGNUP
# =========================================================

class SignupView(APIView):

    def post(self, request):

        serializer = SignupSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                {
                    "message": "Signup successful"
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
class PlaceOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user

        cart_items = CartItem.objects.filter(
            user=user
        ).select_related("product")

        if not cart_items.exists():
            return Response(
                {
                    "message": "Your cart is empty."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        address = request.data.get("address")
        city = request.data.get("city")
        pincode = request.data.get("pincode")
        payment_method = request.data.get(
            "payment_method",
            "COD"
        )

        if not all([
            name,
            email,
            phone,
            address,
            city,
            pincode
        ]):
            return Response(
                {
                    "message": "Please fill all details."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        total_amount = 0

        for item in cart_items:
            total_amount += (
                item.product.price *
                item.quantity
            )

        order = Order.objects.create(
            user=user,
            name=name,
            email=email,
            phone=phone,
            address=address,
            city=city,
            pincode=pincode,
            total_amount=total_amount,
            payment_method=payment_method,
        )

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
            )

        cart_items.delete()

        serializer = OrderSerializer(order)

        return Response(
            {
                "message": "Order placed successfully!",
                "order": serializer.data,
            },
            status=status.HTTP_201_CREATED
        )    

class MyOrdersView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        orders = Order.objects.filter(
            user=request.user
        ).prefetch_related(
            "items__product"
        ).order_by("-created_at")

        serializer = OrderSerializer(
            orders,
            many=True
        )

        return Response(serializer.data)        