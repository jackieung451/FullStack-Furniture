from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

# from ckeditor.fields import RichTextField
# from ckeditor_uploader.fields import RichTextUploadingField
# from tinymce import models as tinymce_models


# from django import forms
# from tinymce.widgets import TinyMCE
# from .models import _your_model_
# from tinymce.models import HTMLField   
  
# class TinyMCEWidget(TinyMCE):
#     def use_required_attribute(self, *args):
#         return False
  
  
# class PostForm(forms.ModelForm):
#     content = forms.CharField(
#         widget=TinyMCEWidget(
#             attrs={'required': False, 'cols': 30, 'rows': 10}
#         )
#     )
#     class Meta:
#         model = _your_model_
#         fields = '__all__'

class Categories(models.TextChoices):
    WORLD = 'world'
    ENVIRONMENT = 'environment'
    TECHNOLOGY = 'technology'
    DESIGN = 'design'
    CULTURE = 'culture'
    BUSINESS = 'business'
    POLITICS = 'politics'
    OPINION = 'opinion'
    SCIENCE = 'science'
    HEALTH = 'health'
    STYLE = 'style'
    TRAVEL = 'travel'

# class Image(models.Model):
#     content = models.ForeignKey(contentimage, on_delete=PROTECT)
#     title = models.CharField(max_length=200)
#     image = models.ImageField(blank=True, upload_to='media/')    
#     description = models.TextField()

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/', help_text="Recommended Width=200 Height=250")
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    upload = models.ImageField(upload_to='images/', null=True, blank=True)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
