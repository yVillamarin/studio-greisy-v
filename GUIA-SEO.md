# 🚀 GUÍA COMPLETA SEO - STUDIO GREISY

## ✅ ARCHIVOS CREADOS/MODIFICADOS

1. ✨ **index.html** - Mejorado con SEO completo
2. 📄 **public/robots.txt** - Permite que Google indexe tu sitio
3. 🗺️ **public/sitemap.xml** - Mapa de tu sitio para Google
4. ⚙️ **vercel.json** - Configuración de Vercel

---

## 📝 PASO A PASO - QUÉ HACER AHORA

### 🔧 PASO 1: ACTUALIZAR INFORMACIÓN PERSONALIZADA

Debes reemplazar estos datos en los archivos:

#### En `index.html` (líneas que dicen "Tu..."):
- ❌ `https://tu-dominio.vercel.app/` → ✅ Tu URL real de Vercel
- ❌ `Tu dirección aquí` → ✅ Dirección real del studio
- ❌ `+57-TU-TELEFONO` → ✅ Tu número de teléfono (ej: +57-312-555-1234)
- ⏰ **Horarios**: Ajusta los horarios de apertura si son diferentes

#### En `public/sitemap.xml`:
- ❌ `https://tu-dominio.vercel.app/` → ✅ Tu URL real de Vercel (4 veces)

#### En `public/robots.txt`:
- ❌ `https://tu-dominio.vercel.app/sitemap.xml` → ✅ Tu URL real

---

### 🚀 PASO 2: SUBIR LOS CAMBIOS A VERCEL

```bash
# 1. En tu carpeta del proyecto, agrega los cambios
git add .

# 2. Confirma los cambios
git commit -m "SEO: Agregado robots.txt, sitemap.xml y meta tags optimizadas"

# 3. Sube a GitHub/Vercel
git push
```

Vercel detectará automáticamente los cambios y desplegará la nueva versión.

---

### 🔍 PASO 3: REGISTRAR EN GOOGLE SEARCH CONSOLE

1. **Ve a**: https://search.google.com/search-console/welcome
2. **Selecciona**: "Prefijo de la URL"
3. **Ingresa**: Tu URL completa de Vercel (ej: https://studio-greisy.vercel.app)
4. **Verificación**:
   - Google te dará varias opciones
   - La más fácil: "Etiqueta HTML"
   - Copia el código que te dan
   - Pégalo en el `<head>` del index.html (justo después de las meta tags)
   - Guarda, haz commit y push
   - Vuelve a Google y da click en "Verificar"

5. **Enviar Sitemap**:
   - Una vez verificado, ve a "Sitemaps" en el menú izquierdo
   - Agrega: `sitemap.xml`
   - Click en "Enviar"

---

### ⚡ PASO 4: SOLICITAR INDEXACIÓN INMEDIATA

En Google Search Console:

1. Click en **"Inspección de URL"** (arriba)
2. Pega tu URL completa
3. Espera la inspección
4. Si dice "La URL no está en Google", click en **"Solicitar indexación"**
5. Espera unos minutos y listo

**Tiempo estimado**: Google puede indexar en 24-48 horas (a veces más rápido)

---

### 📱 PASO 5: REGISTRAR EN GOOGLE MY BUSINESS (CRUCIAL PARA NEGOCIOS LOCALES)

**Esto es MUY importante** para aparecer en búsquedas locales como "cejas cerca de mí":

1. **Ve a**: https://www.google.com/intl/es_co/business/
2. **Crea perfil de empresa** con:
   - Nombre: Studio Greisy
   - Categoría: Salón de belleza / Estética
   - Dirección física
   - Teléfono
   - Horarios
   - **URL del sitio web** (tu Vercel)
   - Fotos de tus trabajos

3. **Verificación**: Google te enviará un código por correo postal o llamada
4. Una vez verificado, aparecerás en Google Maps y búsquedas locales

---

### 🎯 PASO 6: OPTIMIZACIÓN ADICIONAL (OPCIONAL PERO RECOMENDADO)

#### 📸 Optimizar imágenes:
- Las imágenes deben tener nombres descriptivos: `laminado-cejas-pereira.jpg` en vez de `IMG001.jpg`
- Agregar atributos `alt` descriptivos en todas las imágenes

#### 🔗 Conseguir enlaces (Backlinks):
- Regístrate en directorios locales de Pereira
- Comparte en redes sociales (Instagram, Facebook, TikTok)
- Pide a clientes satisfechos que compartan tu link

#### 📝 Crear contenido:
- Blog sobre cuidado de cejas y pestañas
- Tips y consejos
- Antes y después (con permiso de clientes)

---

## 🎁 BONUS: PALABRAS CLAVE RECOMENDADAS

Usa estas palabras en tu contenido del sitio:

**Principales**:
- cejas Pereira
- pestañas Pereira
- extensiones de pestañas Pereira
- lifting de pestañas
- laminado de cejas Pereira
- diseño de cejas

**Secundarias**:
- salón de belleza Pereira
- cejas perfectas
- microblading Pereira
- perfilado de cejas
- extensiones de pestañas naturales
- cejas pelo a pelo

**Long-tail** (frases más específicas):
- "donde hacen extensiones de pestañas en Pereira"
- "mejor salon de cejas Pereira"
- "laminado de cejas precio Pereira"

---

## ✅ CHECKLIST FINAL

Antes de solicitar indexación, verifica:

- [ ] URL personalizada en todos los archivos (index.html, sitemap.xml, robots.txt)
- [ ] Dirección real del negocio
- [ ] Teléfono actualizado
- [ ] Horarios correctos
- [ ] Imagen de preview existe en /public/image/banner-preview.jpg
- [ ] Cambios subidos a Vercel (git push)
- [ ] Sitio desplegado y funcionando
- [ ] Registrado en Google Search Console
- [ ] Sitemap enviado
- [ ] Indexación solicitada
- [ ] Google My Business creado (opcional pero muy recomendado)

---

## 📊 MONITOREO

**Revisa cada semana**:
- Google Search Console → "Rendimiento" → Ver clicks e impresiones
- Google Analytics (si lo instalas)
- Posición en búsquedas: "cejas Pereira", "pestañas Pereira"

**Tiempo esperado para resultados**:
- Primera indexación: 24-48 horas
- Aparecer en primeras páginas: 2-4 semanas (con optimización constante)
- Google My Business verificado: Resultados más rápidos en búsquedas locales

---

## 🆘 PROBLEMAS COMUNES

**"Google no indexa mi sitio"**:
- Verifica que robots.txt permita el acceso
- Revisa que el sitemap esté correcto
- Solicita indexación manual en Search Console

**"No aparezco en búsquedas locales"**:
- Crea/verifica Google My Business
- Agrega información de ubicación en el sitio
- Consigue reseñas de clientes

**"El sitio carga lento"**:
- Optimiza imágenes (comprime antes de subir)
- Usa formato WebP para imágenes
- Revisa el rendimiento en PageSpeed Insights

---

## 📞 SIGUIENTE PASO INMEDIATO

**¡AHORA MISMO!**:
1. Abre index.html
2. Reemplaza "tu-dominio.vercel.app" con tu URL real
3. Agrega tu dirección y teléfono
4. Guarda y haz git push

**¡Listo para despegar! 🚀**
