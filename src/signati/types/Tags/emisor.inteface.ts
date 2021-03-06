import { XmlDomiciolioAttributes } from './domiciolio.interface';

export interface XmlEmisor {
  _attributes?: XmlEmisorAttribute;
  'cfdi:DomicilioFiscal'?: XmlEmisorDomicilioF;
  'cfdi:ExpedidoEn'?: XmlEmisorExpedidoEn;
  'cfdi:RegimenFiscal'?: XmlEmisorRF;
}

export interface XmlEmisorAttribute {
  Rfc?: string;
  Nombre?: string;
  RegimenFiscal?: string | number;
}

export interface XmlEmisorDomicilioF {
  _attributes?: XmlDomiciolioAttributes;
}

export interface XmlEmisorExpedidoEn {
  _attributes?: XmlDomiciolioAttributes;
}

export interface XmlEmisorRF {
  _attributes?: XmlEmisorRFAttributes;
}

export interface XmlEmisorRFAttributes {
  Regimen: string;
}
