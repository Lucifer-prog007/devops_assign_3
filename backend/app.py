from flask import Flask, request

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    age = request.form.get("age")

    return f"""
    <h2>Data Received Successfully!</h2>
    <p><b>Name:</b> {name}</p>
    <p><b>Email:</b> {email}</p>
    <p><b>Age:</b> {age}</p>
    """

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)