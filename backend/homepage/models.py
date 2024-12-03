from django.db import models

class User(models.Model):
    username = models.CharField(primary_key=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    date_joined = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username


class Book(models.Model):
    isbn = models.PositiveIntegerField(primary_key=True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    year = models.PositiveIntegerField()

    def __str__(self):
        return self.title


class Listing(models.Model):
    listing_id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    image = models.ImageField(upload_to='listing_images/', null=True, blank=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="listings")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings")

    def __str__(self):
        return f"Listing {self.listing_id}"


class Conversation(models.Model):
    convo_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="conversations")

    def __str__(self):
        return f"Conversation {self.convo_id}"


class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name="messages")
    content = models.TextField()

    def __str__(self):
        return f"Message {self.message_id}"
