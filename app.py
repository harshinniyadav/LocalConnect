from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/burgerprime')
def burgerprime():
    return render_template('burgerprime.html')

@app.route('/salon')
def salon():
    return render_template('salon.html')

@app.route('/tailor')
def tailor():
    return render_template('tailor.html')

@app.route('/tea')
def tea():
    return render_template('tea.html')

@app.route('/biryani')
def biryani():
    return render_template('biryani.html')

@app.route('/foodcourt')
def foodcourt():
    return render_template('foodcourt.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)