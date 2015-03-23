(function(){
  'use strict';
  describe("Vulgar", function() {
    it('should return false for `i love baking soda`', function(){
      var vulgar = new Vulgar('i love baking soda');
      expect(vulgar.check()).toBeFalsy();
      expect(vulgar.isVulgar).toBeFalsy();

    });

    it('should return true for `no one likes an asshole anyways`', function(){
      var vulgar = new Vulgar('no one likes an asshole anyways');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.count).toBe(1);
      expect(vulgar.isVulgar).toBeTruthy();
    });

    it('should return true for `fUcK boy`', function(){
      var vulgar = new Vulgar('fUcK boy');
      expect(vulgar.isVulgar).toBeUndefined();
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.isVulgar).toBeTruthy();
      expect(vulgar.fixedSentence()).toBe('x_X boy');
    });

    it('should return true for `damn, sHiT got real`', function(){
      var vulgar = new Vulgar('damn, sHiT got real');
      expect(vulgar.isVulgar).toBeUndefined();
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.content).toEqual(['sHiT']);
      expect(vulgar.isVulgar).toBeTruthy();
    });

    it('should return true for `i need to sit the fUCKup, and put my sHiT together`', function(){
      var vulgar = new Vulgar('i need to sit the fUCKup, and put my sHiT together');
      expect(vulgar.original).toBe('i need to sit the fUCKup, and put my sHiT together');
      expect(vulgar.check()).toBeTruthy();
      expect(vulgar.content).toEqual(['fUCK']);
      expect(vulgar.isVulgar).toBeTruthy();
      expect(vulgar.fixedSentence()).toBe('i need to sit the x_X up, and put my x_X together');
    });

  });
})();