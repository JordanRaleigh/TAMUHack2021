import Cookies from "js-cookie";

class Client {
  constructor() {
    this.loggedIn = false;
  }

  async login(email, password) {
    const payload = JSON.stringify({ email: email, password: password });

    let res = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    });
    try {
      let status = res.status;
      if (status !== 200) return await res.text();
      console.log(await res.text());
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }

  async signup(name, email, password) {
    const payload = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    let res = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    });
    try {
      let status = res.status;
      if (status !== 200) return await res.text();
      return "successfully registered user!";

      //   handle logic

      alert("successfully created");
    } catch (error) {
      alert(error);
    }
  }

  isLoggedIn() {
    if (Cookies.get("token")) return true;
    return false;
  }

  logout() {
    Cookies.remove("token");
    window.location.href = "/";
  }

  async findFoodsZip(search, zipCode, setFoods) {
    console.log(zipCode, search);
    let res = await fetch(`/api/food/${search}/${zipCode}`);
    try {
      let status = res.status;
      if (status !== 200) return console.log(await res.text());
      let data = await res.json();
      data.sort((b, a) => {
        return a.upvotes - b.upvotes;
      });
      setFoods((x) => data);
    } catch (error) {
      console.log(error);
    }
  }

  async upvote(_id, success) {
    let res = await fetch(`/api/vote/up/${_id}`, {
      method: "POST",
    });
    try {
      let status = res.status;
      if (status !== 200) {
        if (status == 401) window.location.href = "/signin";
        console.log(await res.text());
      }
      success(await res.json());
    } catch (error) {
      console.log(error);
    }
  }

  async upvoted(_id) {
    let res = await fetch(`/api/vote/up/${_id}`);
    try {
      let status = res.status;
      if (status !== 200) return console.log(await res.text());
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Client();
