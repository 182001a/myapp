from django.db import models

# Create your models here.
class Sample(models.Model):
    
    class Meta:
        db_table = 'sample'

    main_text = models.CharField(verbose_name='メインテキスト', max_length=50)
    sub_text = models.TextField(verbose_name='サブテキスト')

    def __str__(self):
        return self.main_text