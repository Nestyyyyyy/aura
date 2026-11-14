# Aura — Roblox & Discord için DPI Bypass (Türkiye)

GoodbyeDPI'ı yöneten, tek tık kurulan bir Windows uygulaması. Roblox ve Discord'a takılmadan girmeni sağlar;
profil resimleri ve oyun görselleri yüklenir, indirme hızın düşmez.

**Site: [nestyyyyyy.github.io/aura](https://nestyyyyyy.github.io/aura/)**

## İndir

**[⬇ AuraSetup.exe](https://github.com/Nestyyyyyy/aura/releases/latest/download/AuraSetup.exe)** — kurulum programı (yaklaşık 1 MB). Çalıştır, "Kur"a bas.

Diğer seçenekler: [taşınabilir zip](https://github.com/Nestyyyyyy/aura/releases/latest/download/Aura.zip) (.NET 8 Desktop Runtime ister) ·
[tam zip](https://github.com/Nestyyyyyy/aura/releases/latest/download/Aura-tam.zip) (hiçbir şey gerektirmez, 59 MB)

Windows "bilinmeyen yayıncı" uyarısı gösterirse: **Ek bilgi → Yine de çalıştır** (dosya imzasız olduğu için çıkar).

## Özellikler

- **Şifreli DNS (DoH):** ISS sorguları okuyamaz, sahte cevap veremez; önbellekli ve yedekli.
- **Sadece gerekene müdahale:** yalnızca Roblox/Discord alan adları; diğer trafik ve indirme hızı etkilenmez.
- **Servis durumu:** 11 Roblox/Discord sunucusunu gerçek bağlantıyla test eder.
- **Otomatik optimize:** 7 modu dener, hattında çalışan en hafifini seçer.
- **Kendi kendini günceller**, Windows ile başlar, çökerse toparlar.
- **İsteğe bağlı VPN:** Cloudflare WARP (WireGuard).

## Notlar

- Aura bir VPN değildir, IP'ni gizlemez; yalnızca engeli aşar.
- Antivirüs `engine\WinDivert64.sys` için uyarırsa yanlış pozitiftir (açık kaynak ağ sürücüsü). Kaspersky ile çalışmaz.
- Kaldırmak için: Windows Ayarlar → Uygulamalar → Aura DPI Bypass → Kaldır.

Motor: [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI) 0.2.3rc3 (Türkiye paketi) ve [WinDivert](https://github.com/basil00/WinDivert) 2.2.
Kullanımdan doğan sorumluluk kullanıcıya aittir.
