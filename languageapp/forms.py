from django import forms
from .models import UserProfile
from django.contrib.auth.models import User

class UserForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput())
	email_address = forms.EmailField(widget=forms.TextInput(attrs={'class':'required'}))

	def __init__(self, *args, **kwargs):
		self.user = kwargs.pop('user', None)
		super(UserForm, self).__init__(*args, ** kwargs)

	def clean_email_address(self):
		email = self.cleaned_data.get('email_address')
		if self.user and self.user.email == email:
			return email
		if UserProfile.objects.filter(email=email).count():
			raise forms.ValidationError(u'Email address already exists')
		return email
	class Meta:
		model = User
		fields = ('username', 'password')

