const axios = require('axios');

class DigiflazzAPI {
  constructor(username, apikey) {
    if (!username || !apikey) {
      throw new Error('Username and API key are required.');
    }

    this.username = username;
    this.apikey = apikey;
    this.baseUrl = 'https://api.digiflazz.com/v1/';
  }

  async checkBalance() {
    const data = {
      cmd: 'deposit',
      username: this.username,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}cek-saldo`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPriceList() {
    const data = {
      cmd: 'prepaid',
      username: this.username,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}price-list`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deposit(amount, bank, ownerName) {
    const data = {
      username: this.username,
      amount,
      Bank: bank,
      owner_name: ownerName,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}deposit`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async topupTransaction() {
    const data = {
      cmd: 'topup',
      username: this.username,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}transaction`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async pascabayarInquiry(sku, tujuan, refId) {
    const data = {
      commands: 'inq-pasca',
      username: this.username,
      buyer_sku_code: sku,
      customer_no: tujuan,
      ref_id: refId,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}transaction`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async pascabayarPayment(sku, tujuan, refId) {
    const data = {
      commands: 'pay-pasca',
      username: this.username,
      buyer_sku_code: sku,
      customer_no: tujuan,
      ref_id: refId,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}transaction`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async pascabayarStatus(sku, tujuan, refId) {
    const data = {
      commands: 'STATUS',
      username: this.username,
      buyer_sku_code: sku,
      customer_no: tujuan,
      ref_id: refId,
      sign: this.apikey,
    };

    try {
      const response = await axios.post(`${this.baseUrl}transaction`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DigiflazzAPI;
