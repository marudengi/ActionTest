from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_flask():
    return render_template('hello_flask.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

if __name__ == '__main__':
    app.run(host="0.0.0.0")
