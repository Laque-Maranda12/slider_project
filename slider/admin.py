from django.contrib import admin
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin
from .models import SliderImage


@admin.register(SliderImage)
class SliderImageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('order', 'image_preview', 'title', 'is_active', 'created_at')
    list_display_links = ('image_preview', 'title')
    list_editable = ('is_active',)
    list_filter = ('is_active',)
    search_fields = ('title', 'alt_text')
    readonly_fields = ('image_preview_large', 'created_at', 'updated_at')

    fieldsets = (
        ('Основные настройки', {
            'fields': ('title', 'image', 'alt_text'),
        }),
        ('Отображение', {
            'fields': ('is_active',),
        }),
        ('Превью', {
            'fields': ('image_preview_large',),
        }),
        ('Информация', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
        }),
    )

    def image_preview(self, obj):
        """Миниатюра изображения в списке записей."""
        if obj.image:
            return format_html(
                '<img src="{}" style="width: 80px; height: 55px; '
                'object-fit: cover; border-radius: 4px; '
                'border: 1px solid #ddd;" />',
                obj.image.url,
            )
        return format_html(
            '<span style="color: #999;">Нет изображения</span>'
        )
    image_preview.short_description = 'Превью'

    def image_preview_large(self, obj):
        """Крупное превью в форме редактирования."""
        if obj.image:
            return format_html(
                '<img src="{}" style="max-width: 400px; max-height: 300px; '
                'border-radius: 6px; border: 1px solid #ddd;" />',
                obj.image.url,
            )
        return format_html(
            '<span style="color: #999;">Загрузите изображение</span>'
        )
    image_preview_large.short_description = 'Превью изображения'


# Настройка заголовков админки
admin.site.site_header = 'Управление сайтом'
admin.site.site_title = 'Админ-панель'
admin.site.index_title = 'Панель управления'
