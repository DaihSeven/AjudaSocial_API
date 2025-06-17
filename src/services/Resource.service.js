// src/services/ResourceService.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class ResourceService {
  async getAllResource() {
    return await prisma.resource.findMany();
  }

  async getByType(type) {
    const typeSearch = type.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const resources = await prisma.resource.findMany();
    
    return resources.filter(r => 
      r.type.some(t => 
        t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === typeSearch
      )
    );
  }

  async getByLocalization(localization) {
    return await prisma.resource.findMany({
      where: {
        address: {
          contains: localization,
          mode: 'insensitive'
        }
      }
    });
  }

  async getByCity(city) {
    return await prisma.resource.findMany({
      where: {
        city: {
          equals: city,
          mode: 'insensitive'
        }
      }
    });
  }

  async getByCityAndType(city, type) {
    const typeLower = type.toLowerCase();
    const resources = await this.getByCity(city);
    return resources.filter(r => 
      r.type.map(t => t.toLowerCase()).includes(typeLower)
    );
  }

  async getByCityAndLocalization(city, localization) {
    const resources = await this.getByCity(city);
    return resources.filter(r =>
      r.city.toLowerCase() === city.toLowerCase() &&
      r.address.toLowerCase().includes(localization.toLowerCase())
    );
  }

  async getByCityAndTypeAndLocalization(city, type, localization) {
    const typeLower = type.toLowerCase();
    const resources = await this.getByCityAndType(city, type);
    return resources.filter(r =>
      r.city.toLowerCase() === city.toLowerCase() &&
      r.type.map(t => t.toLowerCase()).includes(typeLower) &&
      r.address.toLowerCase().includes(localization.toLowerCase())
    );
  }
}
