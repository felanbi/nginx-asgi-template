from tortoise import fields, models


class Author(models.Model):
    id = fields.IntField(primary_key=True)
    name = fields.TextField()

    class Meta:
        table = "api_author"
