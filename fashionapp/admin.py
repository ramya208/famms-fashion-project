from django.contrib import admin
from .models import Product, CartItem, Order,OrderItem


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price", "stock")


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "product", "quantity")
admin.site.register(Order)
admin.site.register(OrderItem)    