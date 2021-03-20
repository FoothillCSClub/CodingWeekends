#!/usr/bin/env python
import os

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CodingWeekends.settings")

    try:
        from django.core import management
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # django-bakery isn't loaded yet so call_command fails, hence this hack
    # TODO: replace with direct call_command invocation with solution
    management.execute_from_command_line(['', 'build', '--skip-static'])

    management.call_command('collectstatic')
