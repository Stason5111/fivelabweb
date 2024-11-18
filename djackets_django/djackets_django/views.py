from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, world!")  # Простое текстовое сообщение для тестирования