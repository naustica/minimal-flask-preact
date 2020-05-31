import pytest
import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from server import create_app


@pytest.fixture(scope='module')
def test_client():
    client = create_app('config.TestingConfig')

    testing_client = client.test_client()

    ctx = client.app_context()
    ctx.push()

    yield testing_client

    ctx.pop()


def test_index(test_client):

    r = test_client.get('/')
    assert r.status_code == 200


def test_hello_world(test_client):

    r = test_client.get('/api/hello_world')
    assert r.status_code == 200
