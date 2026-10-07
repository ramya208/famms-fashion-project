# from django.db import models
# from django.contrib.auth.models import User


# class Product(models.Model):
#     name = models.CharField(max_length=200)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     description = models.TextField(blank=True)
#     image = models.ImageField(
#         upload_to="products/",
#         blank=True,
#         null=True
#     )
#     stock = models.PositiveIntegerField(default=0)

#     def __str__(self):
#         return self.name


# class CartItem(models.Model):
#     user = models.ForeignKey(
#         User,
#         on_delete=models.CASCADE
#     )

#     product = models.ForeignKey(
#         Product,
#         on_delete=models.CASCADE
#     )

#     quantity = models.PositiveIntegerField(default=1)

#     def __str__(self):
#         return f"{self.user.username} - {self.product.name}"
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)

    added_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="products",
        default=1
    )

    def __str__(self):
        return self.name
class CartItem(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"
# class Order(models.Model):
#     PAYMENT_CHOICES = [
#         ("COD", "Cash on Delivery"),
#     ]

#     STATUS_CHOICES = [
#         ("Pending", "Pending"),
#         ("Confirmed", "Confirmed"),
#         ("Shipped", "Shipped"),
#         ("Delivered", "Delivered"),
#         ("Cancelled", "Cancelled"),
#     ]

#     user = models.ForeignKey(
#         User,
#         on_delete=models.CASCADE
#     )

#     name = models.CharField(max_length=200)
#     email = models.EmailField()
#     phone = models.CharField(max_length=20)
#     address = models.TextField()
#     city = models.CharField(max_length=100)
#     pincode = models.CharField(max_length=10)

#     total_amount = models.DecimalField(
#         max_digits=10,
#         decimal_places=2
#     )

#     payment_method = models.CharField(
#         max_length=20,
#         choices=PAYMENT_CHOICES,
#         default="COD"
#     )

#     status = models.CharField(
#         max_length=20,
#         choices=STATUS_CHOICES,
#         default="Pending"
#     )

#     created_at = models.DateTimeField(
#         auto_now_add=True
#     )

#     def __str__(self):
#         return f"Order #{self.id} - {self.user.username}"
# class Order(models.Model):
#     PAYMENT_CHOICES = [
#         ("COD", "Cash on Delivery"),
#     ]

#     STATUS_CHOICES = [
#         ("Pending", "Pending"),
#         ("Confirmed", "Confirmed"),
#         ("Shipped", "Shipped"),
#         ("Delivered", "Delivered"),
#         ("Cancelled", "Cancelled"),
#     ]

#     user = models.ForeignKey(
#         User,
#         on_delete=models.CASCADE
#     )

#     name = models.CharField(max_length=200)
#     email = models.EmailField()
#     phone = models.CharField(max_length=20)
#     address = models.TextField()
#     city = models.CharField(max_length=100)
#     pincode = models.CharField(max_length=10)

#     total_amount = models.DecimalField(
#         max_digits=10,
#         decimal_places=2
#     )

#     payment_method = models.CharField(
#         max_length=20,
#         choices=PAYMENT_CHOICES,
#         default="COD"
#     )

#     status = models.CharField(
#         max_length=20,
#         choices=STATUS_CHOICES,
#         default="Pending"
#     )

#     # Order Confirmed ஆன நேரம்
#     confirmed_at = models.DateTimeField(
#         null=True,
#         blank=True
#     )

#     created_at = models.DateTimeField(
#         auto_now_add=True
#     )

#     def save(self, *args, **kwargs):

#         # Pending -> Confirmed ஆகும்போது
#         if self.status == "Confirmed" and self.confirmed_at is None:
#             self.confirmed_at = timezone.now()

#         # Confirmed ஆனதிலிருந்து 24 hours முடிந்தால்
#         if (
#             self.status == "Confirmed"
#             and self.confirmed_at is not None
#             and timezone.now() >= self.confirmed_at + timedelta(hours=24)
#         ):
#             self.status = "Delivered"

#         super().save(*args, **kwargs)

#     def __str__(self):
#         return f"Order #{self.id} - {self.user.username}"
class Order(models.Model):
    PAYMENT_CHOICES = [
        ("COD", "Cash on Delivery"),
    ]

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
        ("Shipped", "Shipped"),
        ("Delivered", "Delivered"),
        ("Cancelled", "Cancelled"),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)

    total_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    payment_method = models.CharField(
        max_length=20,
        choices=PAYMENT_CHOICES,
        default="COD"
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def save(self, *args, **kwargs):

        # Order created time-லிருந்து 24 hours முடிந்தால்
        if (
            self.status in ["Pending", "Confirmed", "Shipped"]
            and self.created_at is not None
            and timezone.now() >= self.created_at + timedelta(hours=24)
        ):
            self.status = "Delivered"

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order #{self.id} - {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items"
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    quantity = models.PositiveIntegerField(
        default=1
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return f"{self.product.name} - {self.quantity}"    