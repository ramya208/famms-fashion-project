# """
# URL configuration for fammsproject project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/6.1/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """
# from django.contrib import admin
# # from django.urls import path
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path("api/", include("fashionapp.urls")),
#     path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
#     path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
# ]
# urlpatterns += static(
#     settings.MEDIA_URL,
#     document_root=settings.MEDIA_ROOT
# )
# from django.contrib import admin
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static
# from django.views.generic import TemplateView

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )


# urlpatterns = [
#     path("admin/", admin.site.urls),

#     # API
#     path("api/", include("fashionapp.urls")),

#     # JWT
#     path(
#         "api/token/",
#         TokenObtainPairView.as_view(),
#         name="token_obtain_pair"
#     ),

#     path(
#         "api/token/refresh/",
#         TokenRefreshView.as_view(),
#         name="token_refresh"
#     ),

#     # React
#     path(
#         "",
#         TemplateView.as_view(template_name="index.html"),
#         name="react_home"
#     ),
# ]

# urlpatterns += static(
#     settings.MEDIA_URL,
#     document_root=settings.MEDIA_ROOT
# )
# from django.contrib import admin
# from django.urls import path, include, re_path
# from django.conf import settings
# from django.conf.urls.static import static
# from django.views.static import serve
# from django.shortcuts import render
# from pathlib import Path

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

# BASE_DIR = Path(__file__).resolve().parent.parent


# def react_app(request):
#     return render(
#         request,
#         "index.html"
#     )


# urlpatterns = [

#     # Django Admin
#     path(
#         "admin/",
#         admin.site.urls
#     ),

#     # API
#     path(
#         "api/",
#         include("fashionapp.urls")
#     ),

#     # JWT
#     path(
#         "api/token/",
#         TokenObtainPairView.as_view(),
#         name="token_obtain_pair"
#     ),

#     path(
#         "api/token/refresh/",
#         TokenRefreshView.as_view(),
#         name="token_refresh"
#     ),

#     # React assets
#     path(
#         "assets/<path:path>",
#         serve,
#         {
#             "document_root":
#                 BASE_DIR / "frontend" / "dist" / "assets"
#         }
#     ),

#     # React public files
#     path(
#         "<path:path>",
#         serve,
#         {
#             "document_root":
#                 BASE_DIR / "frontend" / "dist"
#         }
#     ),

#     # React home
#     path(
#         "",
#         react_app,
#         name="react_home"
#     ),
# ]


# urlpatterns += static(
#     settings.MEDIA_URL,
#     document_root=settings.MEDIA_ROOT
# )
# from pathlib import Path

# from django.contrib import admin
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static
# from django.views.static import serve
# from django.shortcuts import render

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )


# BASE_DIR = Path(__file__).resolve().parent.parent


# # ==============================
# # REACT APP
# # ==============================

# def react_app(request, route=None):
#     return render(request, "index.html")


# urlpatterns = [

#     # ==============================
#     # ADMIN
#     # ==============================

#     path(
#         "admin/",
#         admin.site.urls
#     ),

#     # ==============================
#     # API
#     # ==============================

#     path(
#         "api/",
#         include("fashionapp.urls")
#     ),

#     path(
#         "api/token/",
#         TokenObtainPairView.as_view(),
#         name="token_obtain_pair"
#     ),

#     path(
#         "api/token/refresh/",
#         TokenRefreshView.as_view(),
#         name="token_refresh"
#     ),

#     # ==============================
#     # REACT ASSETS
#     # ==============================

#     path(
#         "assets/<path:path>",
#         serve,
#         {
#             "document_root":
#                 BASE_DIR / "frontend" / "dist" / "assets"
#         }
#     ),

#     # ==============================
#     # PRODUCT IMAGES
#     # ==============================

#     path(
#         "products/<path:path>",
#         serve,
#         {
#             "document_root":
#                 BASE_DIR / "frontend" / "dist" / "products"
#         }
#     ),

#     # ==============================
#     # REACT PAGES
#     # ==============================

#     path(
#         "",
#         react_app,
#         name="react_home"
#     ),

#     path(
#         "<path:route>",
#         react_app,
#         name="react_pages"
#     ),
# ]


# # ==============================
# # MEDIA
# # ==============================

# urlpatterns += static(
#     settings.MEDIA_URL,
#     document_root=settings.MEDIA_ROOT
# )
from pathlib import Path

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render
from django.views.static import serve

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

BASE_DIR = Path(__file__).resolve().parent.parent


def react_app(request, route=None):
    return render(request, "index.html")


urlpatterns = [
    # Admin
    path(
        "admin/",
        admin.site.urls
    ),

    # API
    path(
        "api/",
        include("fashionapp.urls")
    ),

    # JWT Login
    path(
        "api/token/",
        TokenObtainPairView.as_view(),
        name="token_obtain_pair"
    ),

    # JWT Refresh
    path(
        "api/token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh"
    ),

    # MEDIA FILES
    # IMPORTANT: This must come BEFORE React catch-all
    path(
        "media/<path:path>",
        serve,
        {
            "document_root": BASE_DIR / "media"
        }
    ),

    # React assets
    path(
        "assets/<path:path>",
        serve,
        {
            "document_root":
            BASE_DIR / "frontend" / "dist" / "assets"
        }
    ),

    # React product images
    path(
        "products/<path:path>",
        serve,
        {
            "document_root":
            BASE_DIR / "frontend" / "dist" / "products"
        }
    ),

    # React Home
    path(
        "",
        react_app,
        name="react_home"
    ),

    # React Pages
    path(
        "<path:route>",
        react_app,
        name="react_pages"
    ),
]