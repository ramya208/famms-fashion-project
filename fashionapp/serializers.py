# from rest_framework import serializers
# from .models import Product, CartItem
# from django.contrib.auth.models import User

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = "__all__"


# class CartItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CartItem
#         fields = "__all__"

# class SignupSerializer(serializers.ModelSerializer):

#     password = serializers.CharField(write_only=True)

#     role = serializers.ChoiceField(
#         choices=["user", "admin"]
#     )

#     class Meta:
#         model = User
#         fields = [
#             "username",
#             "email",
#             "password",
#             "role",
#         ]

#     def create(self, validated_data):

#         role = validated_data.pop("role")

#         user = User.objects.create_user(
#             username=validated_data["username"],
#             email=validated_data["email"],
#             password=validated_data["password"],
#         )

#         if role == "admin":
#             user.is_staff = True

#         user.save()

#         return user        
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, CartItem, Order, OrderItem
from .models import Product, CartItem


# ==========================================
# PRODUCT SERIALIZER
# ==========================================

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"


# ==========================================
# CART PRODUCT DETAILS SERIALIZER
# ==========================================

class CartProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "description",
            "image",
            "stock",
        ]


# ==========================================
# CART ITEM SERIALIZER
# ==========================================

class CartItemSerializer(serializers.ModelSerializer):

    product_details = CartProductSerializer(
        source="product",
        read_only=True
    )

    class Meta:
        model = CartItem

        fields = [
            "id",
            "product",
            "quantity",
            "product_details",
        ]


# ==========================================
# SIGNUP SERIALIZER
# ==========================================

class SignupSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True
    )

    role = serializers.ChoiceField(
        choices=["user", "admin"]
    )

    class Meta:
        model = User

        fields = [
            "username",
            "email",
            "password",
            "role",
        ]

    def create(self, validated_data):

        role = validated_data.pop("role")

        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )

        if role == "admin":
            user.is_staff = True

        user.save()

        return user

class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(
        source="product.name",
        read_only=True
    )

    class Meta:
        model = OrderItem
        fields = [
            "id",
            "product",
            "product_name",
            "quantity",
            "price",
        ]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Order
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "address",
            "city",
            "pincode",
            "total_amount",
            "payment_method",
            "status",
            "created_at",
            "items",
        ]
        read_only_fields = [
            "user",
            "total_amount",
            "status",
            "created_at",
        ]        