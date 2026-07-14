from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            'id', 'name', 'role', 'email', 'bio', 'initials',
            'langs', 'libs', 'fws', 'glow', 'display_order', 'created_date'
        ]
