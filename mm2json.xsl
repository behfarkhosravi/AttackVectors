<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="text" indent="no"/>
  <xsl:param name="indent-increment" select="'    '" />
  
  <xsl:template match="map">
    <!-- Ignores root 'node' -->
    <xsl:apply-templates select="node/node"/>
  </xsl:template>

  <xsl:template match="node">
    <xsl:param name="indent" select="'&#x0A;'"/>
    <xsl:variable name="indent0" select="$indent" />
    <xsl:variable name="indent1" select="concat($indent, $indent-increment)" />

    <xsl:if test="position() &gt; 1">, </xsl:if>
    
    <xsl:text>{</xsl:text>
    
    <xsl:value-of select="$indent1"/>
    <xsl:text>text: "</xsl:text>
    <!-- Need to replace " with \" in @TEXT strings -->
    <xsl:value-of disable-output-escaping='yes' select="@TEXT"/>
    <xsl:text>"</xsl:text>
    
    <xsl:if test="@LINK">
      <xsl:text>,</xsl:text>
      <xsl:value-of select="$indent1"/>
      <xsl:text>url: "</xsl:text>
      <xsl:value-of disable-output-escaping='yes' select="@LINK"/>
      <xsl:text>"</xsl:text>
    </xsl:if>
      
    <xsl:if test="node">
      <xsl:text>,</xsl:text>
      <xsl:value-of select="$indent1"/>
      <xsl:text>items: [</xsl:text>
      
      <!-- Recursion -->
      <xsl:apply-templates select="node">
        <xsl:with-param name="indent" select="$indent1"/>
      </xsl:apply-templates>
        
      <xsl:text>]</xsl:text>
    </xsl:if>

    <xsl:value-of select="$indent0"/>
    <xsl:text>}</xsl:text>
    
  </xsl:template>
</xsl:stylesheet>