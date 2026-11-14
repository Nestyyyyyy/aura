// Aura sitesi: son sürümler, dosya boyutları ve kurulum dosyasının özeti GitHub'dan okunur.
// GitHub'dan gelen her metin sayfaya textContent ile yazılır; innerHTML kullanılmaz (sürüm notuna gömülü HTML çalışmaz).
(function () {
  var sayi = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 1 });
  var tarih = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  var nb = " ";

  // Windows dışındaki cihazlarda indirme işe yaramaz: adresi bilgisayara göndermeyi öner
  if (!/Windows/i.test(navigator.userAgent)) {
    var kutu = document.getElementById("baska-cihaz");
    kutu.hidden = false;
    document.getElementById("kopyala").addEventListener("click", function () {
      var durum = document.getElementById("kopyalandi");
      var adres = "https://nestyyyyyy.github.io/aura/";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(adres).then(function () { durum.textContent = " Kopyalandı."; }, function () { durum.textContent = " " + adres; });
      } else { durum.textContent = " " + adres; }
    });
  }

  // Son 3 sürüm, dosya boyutları ve kurulum dosyasının özeti GitHub'dan okunur; ulaşılamazsa sayfadaki sabit yazılar kalır
  fetch("https://api.github.com/repos/Nestyyyyyy/aura/releases?per_page=3")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (list) {
      if (!Array.isArray(list)) return;
      list = list.filter(function (x) { return !x.draft && !x.prerelease && x.tag_name; });
      if (!list.length) return;
      var son = list[0];
      var mb = function (name) {
        var a = (son.assets || []).find(function (x) { return x.name === name; });
        return a ? sayi.format(a.size / 1048576) + nb + "MB" : null;
      };
      document.getElementById("surum").textContent = "Sürüm " + son.tag_name.replace(/^v/, "") + ". Windows" + nb + "10 ve 11.";
      var kur = mb("AuraSetup.exe"), tam = mb("Aura-tam.zip");
      if (kur) document.getElementById("boyut").textContent = kur + ".";
      if (tam) document.getElementById("boyut-tam").textContent = "(" + tam + ")";

      var ozet = (son.assets || []).find(function (x) { return x.name === "AuraSetup.exe"; });
      if (ozet && /^sha256:/.test(ozet.digest || "")) document.getElementById("ozet").textContent = ozet.digest.slice(7);

      var ul = document.createElement("ul");
      ul.className = "log"; ul.id = "surumler";
      list.forEach(function (rel) {
        var not = (rel.body || "").trim().split(/\r?\n/)[0];
        if (!not) return;
        var li = document.createElement("li");
        var b = document.createElement("b");
        b.textContent = rel.tag_name.replace(/^v/, "");
        var t = document.createElement("time");
        var d = new Date(rel.published_at);
        t.dateTime = rel.published_at;
        t.textContent = tarih.format(d);
        b.appendChild(t);
        var s = document.createElement("span");
        s.textContent = not;
        li.appendChild(b); li.appendChild(s);
        ul.appendChild(li);
      });
      var eski = document.getElementById("surumler");
      if (ul.children.length) eski.parentNode.replaceChild(ul, eski);
    })
    .catch(function () {});
})();
