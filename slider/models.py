from django.db import models
from filer.fields.image import FilerImageField


class SliderImage(models.Model):
    """Модель изображения для слайдера."""

    title = models.CharField(
        max_length=255,
        verbose_name='Название',
        help_text='Название слайда',
    )
    image = FilerImageField(
        on_delete=models.CASCADE,
        related_name='slider_images',
        verbose_name='Изображение',
        help_text='Загрузите изображение через файловый менеджер',
    )
    alt_text = models.CharField(
        max_length=255,
        blank=True,
        verbose_name='Alt-текст',
        help_text='Альтернативный текст для изображения',
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name='Активен',
        help_text='Отображать слайд на сайте',
    )
    order = models.PositiveIntegerField(
        default=0,
        db_index=True,
        verbose_name='Порядок сортировки',
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата создания',
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name='Дата обновления',
    )

    class Meta:
        ordering = ['order']
        verbose_name = 'Слайд'
        verbose_name_plural = 'Слайды'

    def __str__(self):
        return self.title

    @property
    def image_url(self):
        if self.image:
            return self.image.url
        return ''

    @property
    def thumbnail_url(self):
        if self.image:
            try:
                from easy_thumbnails.files import get_thumbnailer
                thumbnailer = get_thumbnailer(self.image.file)
                thumbnail = thumbnailer.get_thumbnail({
                    'size': (150, 100),
                    'crop': True,
                })
                return thumbnail.url
            except Exception:
                return self.image.url
        return ''
