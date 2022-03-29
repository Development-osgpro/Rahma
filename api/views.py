import jwt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import *
from .serializers import *
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from backend import settings
# Create your views here.

@api_view(['GET'])
def getHomePage(request):
    awards = Award.objects.all()
    awardsSerializer = AwardSerializer(awards, many=True)

    countriesData = CountriesData.objects.all()
    countriesDataSerializer = CountriesDataSerializer(countriesData, many=True)

    news = News.objects.all()
    newsSerializer = NewsSerializer(news, many=True)

    facebookposts = SocialMediaPosts.objects.filter(platform="facebook").prefetch_related("region").order_by("-created_at")[0:3]
    facebookpostsSerializer = SocialMediaPostsSerializer(facebookposts, many=True)

    instagramposts = SocialMediaPosts.objects.filter(platform="instagram").prefetch_related("region").order_by("-created_at")[0:3]
    instagrampostsSerializer = SocialMediaPostsSerializer(instagramposts, many=True)

    twitterposts = SocialMediaPosts.objects.filter(platform="twitter").prefetch_related("region").order_by("-created_at")[0:3]
    twitterpostsSerializer = SocialMediaPostsSerializer(twitterposts, many=True)

    ytposts = SocialMediaPosts.objects.filter(platform="youtube").prefetch_related("region").order_by("-created_at")[0:3]
    ytpostsSerializer = SocialMediaPostsSerializer(ytposts, many=True)

    campaigns = Campaign.objects.all()
    campaignsSerializer = CampaignSerializer(campaigns, many=True)

    images = BeforeAfterImage.objects.all()
    imagesSerializer = BeforeAfterImageSerializer(images, many=True)

    heros = Hero.objects.all()
    herosSerializer = HeroSerializer(heros, many=True)

    aboutus_section = AboutUs.objects.get(id=1)
    aboutus_sectionSerializer = AboutUsSerializer(aboutus_section, many=False)

    successStories = SuccessStories.objects.all()
    successStoriesSerializer = SuccessStoriesSerializer(successStories, many=True)

    before_after_images = BeforeAfterImage.objects.get(id=1)
    before_after_imagesSerializer = BeforeAfterImageSerializer(before_after_images, many=False)

    forms = DonationForm.objects.all()
    formsSerializer = DonationFormSerializer(forms, many=True)

    return Response({
        "awards": awardsSerializer.data,
        "countriesData": countriesDataSerializer.data,
        "news": newsSerializer.data,
        "fb_posts": facebookpostsSerializer.data,
        "insta_posts": instagrampostsSerializer.data,
        "tw_posts": twitterpostsSerializer.data,
        "yt_posts": ytpostsSerializer.data,
        "campaigns": campaignsSerializer.data,
        "images": imagesSerializer.data,
        "heros": herosSerializer.data,
        "aboutus_section": aboutus_sectionSerializer.data,
        "successStories": successStoriesSerializer.data,
        "before_after_images": before_after_imagesSerializer.data,
        "forms": formsSerializer.data,
    })

@api_view(['GET'])
def getNewsPage(request):
    news = News.objects.all().prefetch_related("region")
    newsSerializer = NewsSerializer(news, many=True)
    
    return Response(newsSerializer.data)