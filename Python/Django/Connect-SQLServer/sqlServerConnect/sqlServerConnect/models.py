from django.db import models

class sqlServerConn(models.Model):
    CIDCLIENTEPROVEEDOR = models.IntegerField()
    CRAZONSOCIAL = models.CharField(max_length=200)
    CRFC = models.CharField(max_length=100)

    # class Meta:
    #     verbose_name = "Cliente"
    #     verbose_name_plural = "Clientes"
    #     ordering = ["-CIDCLIENTEPROVEEDOR"]

    # def __str__(self):
    #     return self.CIDCLIENTEPROVEEDOR    